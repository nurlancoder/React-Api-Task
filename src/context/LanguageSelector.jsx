import { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

const LanguageSelector = () => {
    const { language, setLanguage } = useContext(LanguageContext);
    return (
        <div>
            <h1>{language === "az" ? "Salam!" : "Hello!"}</h1>
            <button onClick={() => setLanguage("az")}>Azərbaycan</button>
            <button onClick={() => setLanguage("en")}>English</button>
        </div>
    );
}

export default LanguageSelector;
