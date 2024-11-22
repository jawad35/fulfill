import Link from "next/link"
import { useEffect, useState } from "react"

export default function BackToTop() {
    const [hasScrolled, setHasScrolled] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", onScroll)
        return () => {
            window.removeEventListener("scroll", onScroll)
        }
    })

    const onScroll = () => {
        if (window.scrollY > 100 && !hasScrolled) {
            setHasScrolled(true)
        } else if (window.scrollY < 100 && hasScrolled) {
            setHasScrolled(false)
        }
    }

    const handleWhatsAppClick = () => {
        // Replace with your number and pre-filled message
        const phoneNumber = "+923410498631"; // Your WhatsApp number in international format (no "+" or leading zeroes)
        const message = "Hello! I would like to inquire about your services.";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        // Open WhatsApp in a new tab
        window.open(whatsappUrl, "_blank");
    };

    return (
        <>

            {hasScrolled ?
                <div>
                    <div className="scroll-top">
                        <img onClick={handleWhatsAppClick} style={{ width: '80px', bottom: '40px', position: 'absolute', right: '-20px' }} src="/assets/img/icon/wp-btn.png" alt="" />
                    </div>
                    <Link className="scroll-top scroll-to-target open" href="#top" style={{ position: 'fixed', zIndex: 2147483647 }}>
                        <i className="fas fa-angle-up"></i>
                    </Link>
                </div> : <div>
                    <img onClick={handleWhatsAppClick} style={{ width: '80px', bottom: '20px', position: 'absolute', right: '20px' }} src="/assets/img/icon/wp-btn.png" alt="" />
                </div>
            }

        </>
    )
}