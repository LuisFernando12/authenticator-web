export const DrawerNav = ({ children }: { children: React.ReactNode }) => {
    return (
        <aside className="bg-card text-white h-screen w-[14%] rounded-r-2xl flex flex-col pt-10">
            <div className="flex-1 flex-col px-4 pb-5 md:flex">
                <nav className="space-y-1">{children}</nav>
            </div>
        </aside>
    );
};
