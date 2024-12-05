import React, { useState, ChangeEvent } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import Papa from "papaparse";
import { useRouter } from "next/router";
import type { GetServerSideProps, NextPage } from "next";
import RootLayout from "@/components/layout";

const allowedExtensions = ["csv", "json"] as const;

interface FormState {
    region: string;
    country: string;
    cost: string;
    oem: string;
    pname: string;
    category: string;
}

interface Option {
    value: string;
    title: string;
}

interface InputFieldProps {
    label: string;
    name: string;
    type?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

interface InputDropdownProps {
    label: string;
    name: string;
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
    value: string;
    options: Option[];
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const isAuth = true;
    if (!isAuth) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    }
    return {
        props: { token: isAuth },
    };
};

const InputField: React.FC<InputFieldProps> = ({
    label,
    name,
    type,
    onChange,
    value,
}) => {
    return (
        <div>
            <label htmlFor={name} className="hidden text-sm">
                {label}
            </label>
            <input
                type={type || "text"}
                onChange={onChange}
                value={value}
                name={name}
                id={name}
                className=" w-[360px] h-[45px] p-2 text-sm bg-bgcolor border-[1px] border-gray-600 rounded-sm"
                placeholder={label}
            />
        </div>
    );
};

const InputDropdown: React.FC<InputDropdownProps> = ({
    onChange,
    options,
    value,
    label,
    name,
}) => {
    return (
        <div className="opacity-70">
            <label htmlFor={name} className="hidden text-sm">
                {label}
            </label>
            <select
                name={name}
                onChange={onChange}
                value={value}
                id={name}
                className=" w-[360px] h-[45px] p-2 text-sm bg-bgcolor border-[1px] border-gray-600 rounded-sm"
            >
                <option value="" disabled hidden>
                    {label}
                </option>
                {options.map((option, idx) => (
                    <option key={idx} value={option.value}>
                        {option.title}
                    </option>
                ))}
            </select>
        </div>
    );
};

const PreProcess = async (uploaded: File) => {
    return new Promise<void>((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = async ({ target }) => {
            if (!target?.result || typeof target.result !== "string") {
                reject(new Error("File reading error"));
                return;
            }
            const csv = Papa.parse(target.result, { header: true });
            const data = csv?.data as Record<string, string>[];

            const dict: Record<string, string> = {};
            for (let i = 0; i < data.length; ++i) {
                if (data[i]["OEM"]) {
                    data[i]["OEM"] = data[i]["OEM"].split("-")[0];
                }
                if (data[i]["Country"]) {
                    if (!data[i]["Region"]) {
                        if (dict[data[i]["Country"]]) {
                            data[i]["Region"] = dict[data[i]["Country"]];
                        }
                    } else {
                        dict[data[i]["Country"]] = data[i]["Region"];
                    }
                }
            }

            const csvData = new Blob([Papa.unparse(data)], {
                type: "text/csv;charset=utf-8;",
            });
            const csvURL = window.URL.createObjectURL(csvData);
            const tempLink = document.createElement("a");
            tempLink.href = csvURL;

            const newFormData = new FormData();
            // You can append the actual CSV file content instead of link if needed.
            // Here we append both a link and a JSON version for demonstration.
            newFormData.append("link", tempLink.href);
            newFormData.append("data", JSON.stringify(data));

            try {
                await fetch("http://127.0.0.1:5000/file", {
                    method: "POST",
                    body: newFormData,
                    mode: "no-cors",
                });
                resolve();
            } catch (error) {
                reject(error);
            }
        };
        reader.onerror = (e) => reject(e);
        reader.readAsText(uploaded);
    });
};

const NewAnalysis: NextPage<{ token: boolean }> = () => {
    const [file, setFile] = useState<File | null>(null);
    const [form, setForm] = useState<FormState>({
        region: "",
        country: "",
        cost: "",
        oem: "",
        pname: "",
        category: "",
    });
    const router = useRouter();
    const [error, setError] = useState<string>("");
    const [uploaded, setUploaded] = useState<File | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        setError("");
        setLoading(true);
        const files = e.target.files;
        if (files && files.length > 0) {
            const file = files[0];
            const extension = file.type.split("/")[1];
            if (!allowedExtensions.includes(extension as any)) {
                setTimeout(() => {
                    setLoading(false);
                    setError(
                        `${extension} files are not allowed. Please upload CSV or JSON file.`
                    );
                }, 2000);
            } else {
                setTimeout(() => {
                    setLoading(false);
                    setUploaded(file);
                }, 2000);
            }
        } else {
            setLoading(false);
        }
    };

    const handleContinue = async () => {
        if (!uploaded) return;

        setLoading(true);
        // Optionally preprocess the file here if needed:
        // await PreProcess(uploaded);

        // Upload the file to Cloudinary (example)
        const formData = new FormData();
        formData.append("file", uploaded);
        formData.append("upload_preset", "nwd6b30a");

        try {
            const res = await fetch(
                "https://api.cloudinary.com/v1_1/unesco-admin/raw/upload",
                {
                    method: "POST",
                    body: formData,
                }
            );
            const result = await res.json();
            const { url } = result;
            localStorage.setItem("fileLink", url);
            router.push("/analysis");
        } catch (err) {
            console.error("Upload error:", err);
            setError("File upload failed");
        } finally {
            setLoading(false);
        }
    };

    const handleCancel = () => {
        setUploaded(null);
        setError("");
        setLoading(false);
    };

    return (
        <RootLayout>
            <div className="flex items-center flex-col justify-center h-[70vh] w-auto">
                <div className="text-4xl">
                    {!uploaded ? (
                        <span className="font-semibold">ADD FILE</span>
                    ) : (
                        uploaded.name
                    )}
                </div>
                <div
                    className={`mt-3 font-thin tracking-wide ${error ? "text-red-200" : "text-white"
                        }`}
                >
                    {error ? error : "You can add JSON or CSV Files"}
                </div>
                <div className="mt-16">
                    {!uploaded ? (
                        <div className="w-[450px] h-[270px] border-[1px] border-dashed flex items-center justify-center">
                            {!loading ? (
                                <>
                                    <IoIosAddCircleOutline className="opacity-20" size={50} />
                                    <div className="w-[0px] h-[0px] opacity-0 relative -left-20 -top-5">
                                        <input type="file" onChange={handleFileChange} />
                                    </div>
                                </>
                            ) : (
                                <div className="animate-pulse">Loading...</div>
                            )}
                        </div>
                    ) : (
                        <div className="flex space-x-7">
                            <div>
                                <button
                                    className="px-2 py-1 bg-white text-bgcolor rounded-md"
                                    onClick={handleContinue}
                                    disabled={loading}
                                >
                                    {loading ? "loading" : "Continue"}
                                </button>
                            </div>
                            <div>
                                <button
                                    className="px-3 py-1 border-[1px] rounded-md"
                                    onClick={handleCancel}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </RootLayout>
    );
};

export default NewAnalysis;