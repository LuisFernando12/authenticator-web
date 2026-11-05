interface IProps {
    children: React.ReactNode;
}
export const DrawerRoot = ({ children }: IProps) => {
    return <div className="w-full h-full flex ">{children}</div>;
};
