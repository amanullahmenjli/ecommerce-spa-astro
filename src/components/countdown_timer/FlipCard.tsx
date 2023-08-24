// Import required dependencies
import { FC, useState, useEffect } from 'react'

// Define the FlipCard component using TypeScript
const FlipCard: FC<{ content: number; type: string }> = ({ content, type }) => {
    // Define the component's state
    const [isFlipping, setIsFlipping] = useState(false)
    const [currentContent, setCurrentContent] = useState(content)

    // Use useEffect to handle updates to the content prop
    useEffect(() => {
        if (content !== currentContent) {
            // Trigger the flip animation
            setIsFlipping(true)

            // Set new content after 250ms
            setTimeout(() => {
                setCurrentContent(content)
            }, 250)

            // Turn off the flip animation after another 250ms
            setTimeout(() => {
                setIsFlipping(false)
            }, 500) // 500ms in total for both delays
        }
    }, [content, currentContent])

    // Format the content to have leading zero if less than 10
    const displayContent =
        currentContent < 10 ? `0${currentContent}` : currentContent

    // Return the JSX for the component
    return (
        <div>
            <div
                className={'flip-card font-semibold text-[#eee] font-[Roboto] '}
                data-content={type}
            >
                <div className="top leading-9 text-4xl md:text-5xl text-center">
                    <div></div>
                    {displayContent}
                </div>
                <div className="bottom text-4xl md:text-5xl  text-center">
                    {displayContent}
                </div>
                {isFlipping && (
                    <>
                        <div className="top-flip text-4xl md:text-5xl  text-center">
                            {displayContent}
                        </div>
                        <div className="bottom-flip text-4xl md:text-5xl text-center ">
                            {displayContent}
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default FlipCard
