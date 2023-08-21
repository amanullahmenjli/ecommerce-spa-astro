// Importing the SVG images for the different star states
import FullStar from '~/assets/images/FullStar.svg'
import HalfStar from '~/assets/images/HalfStar.svg'
import EmptyStar from '~/assets/images/EmptyStar.svg'

// Defining the interface for the Stars component's props
interface StarsProps {
    score: string // The score representing the star rating
}

// Defining the Stars component
export default function Stars({ score }: StarsProps) {
    // Converting the provided score (string) to a floating-point number
    var roundedScore = parseFloat(score)

    // Creating an array to hold the source paths of star images
    const stars = new Array(5).fill(EmptyStar.src) // Initially filled with empty star image paths

    // Initializing the remaining score to the rounded score
    let remainingScore = roundedScore

    // Looping through the stars array to determine their states
    for (let i = 0; i < stars.length; i++) {
        if (remainingScore >= 1) {
            stars[i] = FullStar.src // Filling a full star if the remaining score is greater than or equal to 1
            remainingScore -= 1
        } else if (remainingScore >= 0.5) {
            stars[i] = HalfStar.src // Filling a half star if the remaining score is greater than or equal to 0.5
            remainingScore = 0
        } else {
            break // Exiting the loop if the remaining score is less than 0.5
        }
    }

    // Returning the JSX representation of the Stars component
    return (
        <div className="flex items-center gap-1">
            {stars.map((star, index) => (
                <img
                    key={index}
                    src={star}
                    alt={`Star ${index}`}
                    className="w-6 "
                /> // Rendering each star image
            ))}
        </div>
    )
}
