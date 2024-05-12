import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import "./Footer.css";
import Image from "next/image";
import Logo from "../../public/snake-2.png";

const Footer = () => {
  return (
    <footer className="bg-white h-20 relative">
      <MaxWidthWrapper>
        <div className="border-t border-gray-200" />
        <div className="footer__long">
          <div className="footer__top">
            <div className="logo">
              <Image src={Logo} alt="Case Cobra | Adeweb Developer" style={{ width: "20%" }} />
              <h2>
                Capture your favorite memories with your own, one-of-one phone
                case. CaseCobra allows you to protect your memories, not just
                your phone case.
              </h2>
            </div>
            <div className="email">
              <input placeholder="Enter your email" type="email" name="" id="" />
              <div className="buttonEmail">Subscribe</div>
            </div>

            <div className='flex items-center justify-center'>
            <div className='flex space-x-8'>
              <Link
                href='#'
                className='text-sm text-muted-foreground hover:text-gray-600'>
                Terms
              </Link>
              <Link
                href='#'
                className='text-sm text-muted-foreground hover:text-gray-600'>
                Privacy Policy
              </Link>
              <Link
                href='#'
                className='text-sm text-muted-foreground hover:text-gray-600'>
                Cookie Policy
              </Link>
            </div>
          </div>
          </div>
         
        </div>

        <div className='h-full flex flex-col md:flex-row md:justify-between justify-center items-center'>
          <div className='text-center md:text-left pb-2 md:pb-0'>
            <p className='text-sm text-muted-foreground'>
              &copy; CaseCobra Inc. {new Date().getFullYear()} All rights reserved | We are one of a kind delivery service | By Adeweb Developer
            </p>
          </div>

          
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
