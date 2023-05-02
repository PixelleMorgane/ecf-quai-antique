import Header from './Header';
import Footer from './Footer';

function Page({children}: {children: JSX.Element | JSX.Element[]}) {
    return (
    <>
        <Header />
            {children}
        <Footer />
    </>
    )
}

export default Page;