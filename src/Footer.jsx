import { Instagram, MessageCircle, Twitter, Mail, Linkedin } from "lucide-react";


function Footer() {
    const openWhatsApp = () => {
        const phoneNumber = '254742310701';
        const message = "HELLO! Let's talk  .";
        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappURL, '_blank');
    };

    const socialLinks = [
        {
            icon: Instagram,
            href: "https://www.instagram.com/__jow.nt3?igsh=Zm51YXV3cjExdDk1",
            label: "Instagram",
            color: "hover:text-pink-400"
        },
        {
            icon: MessageCircle,
            onClick: openWhatsApp,
            label: "WhatsApp",
            color: "hover:text-green-400"
        },
        {
            icon: Twitter,
            href: "https://x.com/john17253_john?s=08",
            label: "Twitter/X",
            color: "hover:text-blue-400"
        },
        {
            icon: Linkedin,
            href: "https://linkedin.com/in/yourprofile",
            label: "LinkedIn",
            color: "hover:text-blue-500"
        },
        {
            icon: Mail,
            href: "mailto:devmacharia7@gmail.com",
            label: "Email",
            color: "hover:text-red-400"
        }
    ];

    return (
        <footer className="z-50 bg-gradient-to-r  from-slate-900 via-blue-900 to-gray-900 border-t border-gray-700">
            <div className=" px-3 py-3">
                {/* Main footer content */}
                <div className="flex  md:flex-row justify-between  gap-1">
                    
                    {/* Logo section */}
                    <div className="flex justify-start space-x-2">
                        
                        <div className="text-white  flex sm:flex-col">
                            <h3 className="md:text-xl text-sm font-semibold  ">
                              Dev <br></br> <span className="font-semibold text-blue-500 text-lg">Macharia</span>
                            </h3>
                            
                        </div>
                    </div>
                    <div className="text-center items-center hidden md:flex lg:text-right">
                        <p className="text-gray-50 text-sm">
                            © {new Date().getFullYear()} All Rights Reserved
                        </p>
                       
                    </div>

                    {/* Social media icons */}
                    <div className="flex items-center justify-end space-x-2">
                        {socialLinks.map((social, index) => {
                            const IconComponent = social.icon;
                            
                            if (social.onClick) {
                                return (
                                    <button
                                        key={index}
                                        onClick={social.onClick}
                                        className={`p-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-gray-300 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:border-white/20 hover:shadow-lg`}
                                        aria-label={social.label}
                                    >
                                        <IconComponent size={16} />
                                    </button>
                                );
                            }
                            
                            return (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-gray-300 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:border-white/20 hover:shadow-lg`}
                                    aria-label={social.label}
                                >
                                    <IconComponent size={16} />
                                </a>
                            );
                        })}
                    </div>

                    {/* Copyright */}
                   
                </div>
                  <div className="mt-2 ">
                    <div className="h-[2px] bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 rounded-full opacity-60"></div>
                </div>

                <div className="justify-end flex md:hidden ">
                        <p className="text-gray-50 text-sm">
                            © {new Date().getFullYear()} All Rights Reserved
                        </p>
                       
                    </div>
            </div>
           
        </footer>
    );
}

export default Footer;