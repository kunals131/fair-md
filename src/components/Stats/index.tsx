const stats = [
    { name: 'Total Models Uploaded', value: '405' },
    { name: 'Datasets Uploaded', value: '3.65', unit: 'mins' },
    { name: 'Tests Run', value: '3' },
    { name: 'Successful Evaluations', value: '98.5%' },
]

export default function Stats({ data }: { data: any }) {
    return (
        <div className="bg-gray-900">
            <div className="mx-auto w-full">
                <div className="grid grid-cols-1 gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
                    {data.map((stat: any) => (
                        <div key={stat.label} className="bg-gray-900 px-4 py-6 sm:px-6 lg:px-4">
                            <p className="text-sm/6 font-medium text-gray-400">{stat.label}</p>
                            <p className="mt-2 flex items-baseline gap-x-2">
                                <span className="text-4xl font-semibold tracking-tight text-white">{stat.value}</span>
                                {stat.unit ? <span className="text-sm text-gray-400">{stat.unit}</span> : null}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}