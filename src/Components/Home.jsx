import React, { useContext, useEffect, useState } from 'react';
import { databse } from '../MainDataDirectory/UserCotext';

const Home = () => {
    const { Text, propertycategory, display, position, overflow, fontsize, textalign, borderwidth, boxshadow, hovercursor, userselect, flexdirection, justifycontent, alignitems, rounded } = useContext(databse);

    const [displayedText, setDisplayedText] = useState("");
    const [charIndex, setCharIndex] = useState(0);

    const [textsize, settextsize] = useState("text-4xl");
    const [textfont, settextfont] = useState("font-mono");
    const [textselect, settextselect] = useState("select-none");
    const [textcursor, settextcursor] = useState("hover:cursor-pointer");

    const [divborder, setdivborder] = useState("border-2");
    const [divbg, setdivbg] = useState("bg-white");
    const [divdisplay, setdivdisplay] = useState("flex");
    const [divjustify, setdivjustify] = useState("justify-center");
    const [divalignitems, setdivalignitems] = useState("items-center");
    const [divpadding, setdivpadding] = useState("p-10");
    const [divrounded, setdivrounded] = useState("rounded-xl");
    const [divflexdirection, setdivflexdirection] = useState('flex-col');
    const [divshadow, setdivshadow] = useState("shadow-sm");
    const [divposition, setdivposition] = useState("");
    const [divoverflow, setdivoverflow] = useState("overflow-hidden");

    const [currentView, setCurrentView] = useState("categories");
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedVariable, setSelectedVariable] = useState(null);

    useEffect(() => {
        if (charIndex < Text.length) {
            const timer = setTimeout(() => {
                setDisplayedText(prevText => prevText + Text.charAt(charIndex));
                setCharIndex(prevIndex => prevIndex + 1);
            }, 90);
            return () => clearTimeout(timer);
        }
    }, [charIndex, Text]);

    const isTypingComplete = charIndex === Text.length;
    const [upperarrowleft, setupperarrowleft] = useState("1px");
    const [downarrowleft, setdownarrowleft] = useState("1px");

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setCurrentView("variables");
    };

    const handleVariableClick = (variable) => {
        setSelectedVariable(variable);
        setCurrentView("values");
    };

    const handleValueClick = (value, variable) => {
        switch (variable) {
            case 'display':
                setdivdisplay(value);
                break;
            case 'position':
                setdivposition(value);
                break;
            case 'overflow':
                setdivoverflow(value);
                break;

            case 'fontsize':
                settextsize(value);
                break;
            case 'textalign':
                break;

            case 'borderwidth':
                setdivborder(value);
                break;
            case 'boxshadow':
                setdivshadow(value);
                break;
            case 'rounded':
                setdivrounded(value);
                break;

            case 'hovercursor':
                settextcursor(value);
                break;
            case 'userselect':
                settextselect(value);
                break;

            case 'flexdirection':
                setdivflexdirection(value);
                break;
            case 'justifycontent':
                setdivjustify(value);
                break;
            case 'alignitems':
                setdivalignitems(value);
                break;
            default:
                break;
        }
        setCurrentView("variables");
    };

    const getVariablesForCategory = (category) => {
        switch (category) {
            case "Layout & Positioning":
                return { display, position, overflow };
            case "Typography & Text":
                return { fontsize, textalign };
            case "Visuals & Backgrounds":
                return { borderwidth, boxshadow, rounded };
            case "Interactivity & Effects":
                return { hovercursor, userselect };
            case "Flexbox & Grid":
                return { flexdirection, justifycontent, alignitems };
            default:
                return {};
        }
    };

    const getValuesForVariable = (variable) => {
        switch (variable) {
            case 'display':
                return display;
            case 'position':
                return position;
            case 'overflow':
                return overflow;
            case 'fontsize':
                return fontsize;
            case 'textalign':
                return textalign;
            case 'borderwidth':
                return borderwidth;
            case 'boxshadow':
                return boxshadow;
            case 'rounded':
                return rounded;
            case 'hovercursor':
                return hovercursor;
            case 'userselect':
                return userselect;
            case 'flexdirection':
                return flexdirection;
            case 'justifycontent':
                return justifycontent;
            case 'alignitems':
                return alignitems;
            default:
                return [];
        }
    };

    const handleBackClick = () => {
        if (currentView === "values") {
            setCurrentView("variables");
            setSelectedVariable(null);
        } else if (currentView === "variables") {
            setCurrentView("categories");
            setSelectedCategory(null);
        }
    };

    const handleReset = () => {
        settextsize("text-4xl");
        settextfont("font-mono");
        settextselect("select-none");
        settextcursor("hover:cursor-pointer");

        setdivborder("border-2");
        setdivbg("bg-white");
        setdivdisplay("flex");
        setdivjustify("justify-center");
        setdivalignitems("items-center");
        setdivpadding("p-10");
        setdivrounded("rounded-xl");
        setdivflexdirection('flex-col');
        setdivshadow("shadow-sm");
        setdivposition("");
        setdivoverflow("overflow-hidden");

        setCurrentView("categories");
        setSelectedCategory(null);
        setSelectedVariable(null);
    };

    return (
        <div className='bg-[#FFF3B0] flex flex-col justify-between p-10 font-mono gap-20 min-h-screen'>
            <h1 className='text-7xl'>
                {displayedText}
                {!isTypingComplete && <span>|</span>}
            </h1>
            <div className='bg-[#29E7CD] p-10 border-[1px] rounded-xl flex flex-col items-center gap-10 h-2/3'>
                <div className='flex gap-10 w-full'>
                    <div className='border-[1px] rounded-xl p-10 w-1/2 bg-[#04030F] relative text-white flex flex-col text-2xl justify-around overflow-hidden'>
                        {(currentView === "variables" || currentView === "values") && (
                            <div
                                className='absolute p-3 bg-black top-0 right-10 hover:cursor-pointer transition-all duration-300'
                                onMouseEnter={() => { setupperarrowleft("-6px"); setdownarrowleft("-6px") }}
                                onMouseLeave={() => { setupperarrowleft("1px"); setdownarrowleft("1px") }}
                                onClick={handleBackClick}
                            >
                                <div className={`h-[40px] w-[3px] bg-white transform rotate-90`}></div>
                                <div className={`h-[25px] w-[3px] bg-white absolute top-[11px] transition-all duration-300 left-[${upperarrowleft}] transform rotate-45`}></div>
                                <div className={`h-[25px] w-[3px] bg-white absolute top-[28px] transition-all duration-300 left-[${downarrowleft}] transform -rotate-45`}></div>
                            </div>
                        )}
                        <div className={`transition-all duration-500 ease-in-out ${currentView === "categories" ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full absolute"}`}>
                            {currentView === "categories" &&
                                propertycategory.map((single, key) => (
                                    <div key={key} className="group" onClick={() => handleCategoryClick(single)}>
                                        <p className='hover:cursor-pointer hover:opacity-70'>{single}</p>
                                        <hr className="mt-2 w-full transition-all duration-500 ease-in-out group-hover:w-1/2" />
                                    </div>
                                ))}
                        </div>
                        <div className={`transition-all duration-500 ease-in-out ${currentView === "variables" ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full absolute"}`}>
                            {currentView === "variables" && selectedCategory &&
                                Object.keys(getVariablesForCategory(selectedCategory)).map((variable, key) => (
                                    <div key={key} className="group" onClick={() => handleVariableClick(variable)}>
                                        <p className='hover:cursor-pointer hover:opacity-70'>{variable}</p>
                                        <hr className="mt-2 w-full transition-all duration-500 ease-in-out group-hover:w-1/2" />
                                    </div>
                                ))}
                        </div>
                        <div className={`transition-all duration-500 ease-in-out ${currentView === "values" ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full absolute"}`}>
                            {currentView === "values" && selectedVariable &&
                                getValuesForVariable(selectedVariable).map((value, key) => (
                                    <div key={key} className="group" onClick={() => handleValueClick(value, selectedVariable)}>
                                        <p className='hover:cursor-pointer hover:opacity-70'>{value}</p>
                                        <hr className="mt-2 w-full transition-all duration-500 ease-in-out group-hover:w-1/2" />
                                    </div>
                                ))}
                        </div>
                    </div>
                    <div className={`${divborder} ${divrounded} ${divpadding} w-1/2 ${divbg} ${divdisplay} ${divflexdirection} ${divjustify} ${divalignitems} ${divshadow} shadow-black ${divposition} ${divoverflow} h-78`}>
                        <p className={`${textsize} ${textfont} ${textselect} ${textcursor}`}>This Is The Main Sample Text</p>
                        <p>This is just another line.</p>
                        <p className='text-9xl h-12'>Hi I am Hidden</p>
                    </div>
                </div>
                <div className='bg-red-200 p-5 rounded-4xl text-4xl text-center hover:cursor-pointer' onClick={handleReset}>Reset</div>
            </div>
            <div className='gap-2 flex flex-col'>
                <div className='p-5 bg-black rounded-xl text-white flex gap-5 items-center text-2xl'>
                    <p>Your Div Properties:-</p>
                    <div className='p-2 rounded-xl bg-white text-black'>"{divborder} {divbg} {divdisplay} {divflexdirection} {divjustify} {divalignitems} {divrounded} {divpadding} {divshadow} shadow-black {divposition} {divoverflow}"</div>
                </div>
                <div className='p-5 bg-black rounded-xl text-white flex gap-5 items-center text-2xl'>
                    <p>Your Text Properties:-</p>
                    <div className='p-2 rounded-xl bg-white text-black'>"{textsize} {textfont} {textselect} {textcursor}"</div>
                </div>
            </div>
        </div>
    );
};

export default Home;