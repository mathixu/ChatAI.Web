export default function Modal({children}: {children: React.ReactNode}) {
    return (
        <div className={"modal modal-open modal-bottom sm:modal-middle"}>
            <div className={"modal-box bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200"}>
                {children}
            </div>
        </div>
    );
}