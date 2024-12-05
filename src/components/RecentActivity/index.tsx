import { ChatBubbleLeftIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

const discussions = [
    {
        id: 1,
        title: 'Model Exeuction 1',
        href: '#',
        author: { name: 'Project Tesla', href: '#' },
        date: '2d ago',
        dateTime: '2023-01-23T22:34Z',
        status: 'active',
        totalComments: 24,
        commenters: [
            {
                id: 12,
                name: 'Emma Dorsey',
                imageUrl:
                    'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                id: 6,
                name: 'Tom Cook',
                imageUrl:
                    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                id: 4,
                name: 'Lindsay Walton',
                imageUrl:
                    'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                id: 16,
                name: 'Benjamin Russel',
                imageUrl:
                    'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                id: 23,
                name: 'Hector Gibbons',
                imageUrl:
                    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
        ],
    },
    {
        id: 2,
        title: 'Model Exeuction 2',
        href: '#',
        author: { name: 'Project Tesla', href: '#' },
        date: '2d ago',
        dateTime: '2023-01-23T19:20Z',
        status: 'active',
        totalComments: 100,
        commenters: [
            {
                id: 13,
                name: 'Alicia Bell',
                imageUrl:
                    'https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                id: 16,
                name: 'Benjamin Russel',
                imageUrl:
                    'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                id: 3,
                name: 'Dries Vincent',
                imageUrl:
                    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
        ],
    },
    {
        id: 3,
        title: 'Rain forest model',
        href: '#',
        author: { name: 'Projet Tesla', href: '#' },
        date: '3d ago',
        dateTime: '2023-01-22T12:59Z',
        status: 'resolved',
        totalComments: 22,
        commenters: [
            {
                id: 19,
                name: 'Lawrence Hunter',
                imageUrl:
                    'https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                id: 21,
                name: 'Angela Fisher',
                imageUrl:
                    'https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                id: 14,
                name: 'Jenny Wilson',
                imageUrl:
                    'https://images.unsplash.com/photo-1507101105822-7472b28e22ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                id: 16,
                name: 'Benjamin Russel',
                imageUrl:
                    'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
        ],
    },
    {
        id: 4,
        title: 'Rickshaw Model',
        href: '#',
        author: { name: 'Projet Tesla', href: '#' },
        date: '3d ago',
        dateTime: '2023-01-22T12:59Z',
        status: 'resolved',
        totalComments: 22,
        commenters: [
            {
                id: 19,
                name: 'Lawrence Hunter',
                imageUrl:
                    'https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                id: 21,
                name: 'Angela Fisher',
                imageUrl:
                    'https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                id: 14,
                name: 'Jenny Wilson',
                imageUrl:
                    'https://images.unsplash.com/photo-1507101105822-7472b28e22ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                id: 16,
                name: 'Benjamin Russel',
                imageUrl:
                    'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
        ],
    },


]

export default function RecentActivity() {
    return (
        <ul role="list" className="divide-y divide-gray-500">
            {discussions.map((discussion) => (
                <li
                    key={discussion.id}
                    className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 py-5 sm:flex-nowrap"
                >
                    <div>
                        <p className="text-sm/6 font-semibold text-gray-300">
                            <a href={discussion.href} className="hover:underline">
                                {discussion.title}
                            </a>
                        </p>
                        <div className="mt-1 flex items-center gap-x-2 text-xs/5 text-gray-500">
                            <p>
                                <a href={discussion.author.href} className="hover:underline">
                                    {discussion.author.name}
                                </a>
                            </p>
                            <svg viewBox="0 0 2 2" className="size-0.5 fill-current">
                                <circle r={1} cx={1} cy={1} />
                            </svg>
                            <p>
                                <time dateTime={discussion.dateTime}>{discussion.date}</time>
                            </p>
                        </div>
                    </div>
                    <dl className="flex w-full flex-none justify-between gap-x-8 sm:w-auto">
                        <div className="flex -space-x-0.5">
                            <dt className="sr-only">Commenters</dt>
                            <div className='font-semibold'>{discussion?.totalComments}%</div>
                        </div>
                        <div className="flex w-16 gap-x-2.5">
                            <dt>
                                <span className="sr-only">Total comments</span>
                                {discussion.status === 'resolved' ? (
                                    <CheckCircleIcon aria-hidden="true" className="size-6 text-gray-400" />
                                ) : (
                                    <ChatBubbleLeftIcon aria-hidden="true" className="size-6 text-gray-400" />
                                )}
                            </dt>
                            <dd className="text-sm/6 text-gray-900">{discussion.totalComments}</dd>
                        </div>
                    </dl>
                </li>
            ))}
        </ul>
    )
}
