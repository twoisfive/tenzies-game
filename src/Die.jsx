export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    const playSound = () => {
        const sfx = new Audio("/beep_sfx.mp3"); // path to your sound file
        sfx.play();
    };
    const dieClick = () => {
        props.hold()
        playSound()
    }
    
    return (
        <button 
            style={styles}
            onClick={dieClick}
            aria-pressed={props.isHeld}
            aria-label={`Die with value ${props.value}, 
            ${props.isHeld ? "held" : "not held"}`}
        >{props.value}</button>
    )
}