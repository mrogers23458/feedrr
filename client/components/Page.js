import Header from "./global_components/Header";

export default function Page({children}){

    return (
        <div className="bg-gray-500">
            <Header />
            {children}
        </div>
    )
}

