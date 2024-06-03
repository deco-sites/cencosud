import { useState, useRef, useEffect } from "preact/compat";
import Icon from "./Icon.tsx"

export interface Question {
    title: string;
    /** @format rich-text */
    answer: string;
}

export interface Props {
    questions?: Question[];
}

export default function BlogPosts({
    questions = [
        {
            title: "Question #1 text goes here",
            answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut vestibulum ligula. Nam et tellus sit amet magna convallis interdum. Integer fermentum ligula nec velit hendrerit, quis feugiat odio feugiat. Ut vel nisi auctor, rhoncus felis vitae, tempor metus. Fusce ut lectus et ex consectetur ullamcorper. Nulla facilisi. Proin ullamcorper, odio a consectetur posuere, mauris felis rutrum lectus, et convallis est risus vitae nisi. Suspendisse potenti. Donec ultricies consectetur lorem, eget tempor nisi cursus in. Vivamus at nulla eros. Sed nec malesuada mauris. Curabitur id ex sed neque rutrum tincidunt. Sed sed lectus nec libero eleifend luctus. Aenean convallis feugiat elit, non tincidunt eros vehicula sed. Phasellus pretium urna sit amet risus interdum tempor.",
        },
        {
            title: "Question #2 text goes here",
            answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut vestibulum ligula. Nam et tellus sit amet magna convallis interdum. Integer fermentum ligula nec velit hendrerit, quis feugiat odio feugiat. Ut vel nisi auctor, rhoncus felis vitae, tempor metus. Fusce ut lectus et ex consectetur ullamcorper. Nulla facilisi. Proin ullamcorper, odio a consectetur posuere, mauris felis rutrum lectus, et convallis est risus vitae nisi. Suspendisse potenti. Donec ultricies consectetur lorem, eget tempor nisi cursus in. Vivamus at nulla eros. Sed nec malesuada mauris. Curabitur id ex sed neque rutrum tincidunt. Sed sed lectus nec libero eleifend luctus. Aenean convallis feugiat elit, non tincidunt eros vehicula sed. Phasellus pretium urna sit amet risus interdum tempor.",
        },
        {
            title: "Question #3 text goes here",
            answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut vestibulum ligula. Nam et tellus sit amet magna convallis interdum. Integer fermentum ligula nec velit hendrerit, quis feugiat odio feugiat. Ut vel nisi auctor, rhoncus felis vitae, tempor metus. Fusce ut lectus et ex consectetur ullamcorper. Nulla facilisi. Proin ullamcorper, odio a consectetur posuere, mauris felis rutrum lectus, et convallis est risus vitae nisi. Suspendisse potenti. Donec ultricies consectetur lorem, eget tempor nisi cursus in. Vivamus at nulla eros. Sed nec malesuada mauris. Curabitur id ex sed neque rutrum tincidunt. Sed sed lectus nec libero eleifend luctus. Aenean convallis feugiat elit, non tincidunt eros vehicula sed. Phasellus pretium urna sit amet risus interdum tempor.",
        },
        {
            title: "Question #4 text goes here",
            answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut vestibulum ligula. Nam et tellus sit amet magna convallis interdum. Integer fermentum ligula nec velit hendrerit, quis feugiat odio feugiat. Ut vel nisi auctor, rhoncus felis vitae, tempor metus. Fusce ut lectus et ex consectetur ullamcorper. Nulla facilisi. Proin ullamcorper, odio a consectetur posuere, mauris felis rutrum lectus, et convallis est risus vitae nisi. Suspendisse potenti. Donec ultricies consectetur lorem, eget tempor nisi cursus in. Vivamus at nulla eros. Sed nec malesuada mauris. Curabitur id ex sed neque rutrum tincidunt. Sed sed lectus nec libero eleifend luctus. Aenean convallis feugiat elit, non tincidunt eros vehicula sed. Phasellus pretium urna sit amet risus interdum tempor.",
        },
        {
            title: "Question #5 text goes here",
            answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut vestibulum ligula. Nam et tellus sit amet magna convallis interdum. Integer fermentum ligula nec velit hendrerit, quis feugiat odio feugiat. Ut vel nisi auctor, rhoncus felis vitae, tempor metus. Fusce ut lectus et ex consectetur ullamcorper. Nulla facilisi. Proin ullamcorper, odio a consectetur posuere, mauris felis rutrum lectus, et convallis est risus vitae nisi. Suspendisse potenti. Donec ultricies consectetur lorem, eget tempor nisi cursus in. Vivamus at nulla eros. Sed nec malesuada mauris. Curabitur id ex sed neque rutrum tincidunt. Sed sed lectus nec libero eleifend luctus. Aenean convallis feugiat elit, non tincidunt eros vehicula sed. Phasellus pretium urna sit amet risus interdum tempor.",
        },
    ],
}: Props) {

    return (
        <>
            <style
                dangerouslySetInnerHTML={{
                    __html: `
        details[open] {
          border-color: #1C00FC;
          border-width: 0 0 0 2px;
        }

        details[open] .titleOpen {
          color: #1C00FC;
        }

        .icon-container {
          transition: transform 0.3s ease;
        }

        details[open] .icon-plus {
          display: none;
        }

        details:not([open]) .icon-minus {
          display: none;
        }

        .iconFilterFaq {
          filter: invert(81%) sepia(0%) saturate(30%) hue-rotate(272deg) brightness(105%) contrast(92%);
        }
        `,
                }}
            />
            <div className="lg:container md:max-w-6xl lg:mx-auto mx-4 text-sm py-12 lg:py-28">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 justify-between">
                    <div className="flex-auto border-l-[1px] border-solid border-[rgba(0,0,0,.08)]">
                        {questions?.map((question, index) => (
                            <details
                                className=""
                            >
                                <summary className="text-lg text-secondary font-semibold cursor-pointer py-5 flex">
                                    <span className="pl-[30px] font-bold titleOpen">{`${index + 1}`}</span>
                                    <span className="flex-auto pl-[40px] titleOpen">
                                        {question.title}
                                    </span>
                                    <span className="flex-none transition icon-container">
                                        <Icon
                                            className="icon-plus iconFilterFaq"
                                            id="Plus"
                                            strokeWidth={2}
                                            size={17}
                                        />
                                        <Icon
                                            className="icon-minus iconFilterFaq"
                                            id="Minus"
                                            strokeWidth={2}
                                            size={17}
                                        />
                                    </span>
                                </summary>
                                <div
                                    className="leading-relaxed mb-6 group-open:animate-fadeIn pl-[70px]"
                                    dangerouslySetInnerHTML={{ __html: question.answer }}
                                />
                            </details>
                        ))}
                    </div>
                </div>
            </div>
            <script dangerouslySetInnerHTML={{
                __html: `
           const details = document.querySelectorAll("details");
           
           details.forEach((targetDetail) => {
             targetDetail.addEventListener("click", () => {
               details.forEach((detail) => {
                 if (detail !== targetDetail) {
                   detail.removeAttribute("open");
                 }
               });
             });
           });`}}></script>
        </>
    );
}
