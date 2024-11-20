import { scroller } from "react-scroll";
/*
- Function to handle scrolling and navigation
- pass the section to scroll to as an argument to the handleNavigateAndScroll function
- pass the navigate function from the useNavigate hook as an argument to the handleNavigateAndScroll function
- pass the location object from the useLocation hook as an argument to the handleNavigateAndScroll function
- use the scroller.scrollTo method to scroll to the specified section
*/
export const handleNavigateAndScroll = (section, navigate, location) => {
    if (location.pathname !== "/") {
        // Navigate to the home page first
        navigate("/");
    }

    // Delay to ensure the navigation is completed
    setTimeout(() => {
        scroller.scrollTo(section, {
            smooth: true,
            duration: 500,
            offset: -70, // Offset for sticky navbar height
        });
    }, 100); // Adjust delay if needed
};