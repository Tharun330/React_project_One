export default function Tabs({ buttons, children, buttonContainer = "div" }) {
    
    const ButtonContainer = buttonContainer;
    return (
        <>
            <ButtonContainer>
                {buttons}
            </ButtonContainer>
            {children}
        </>
    )
}