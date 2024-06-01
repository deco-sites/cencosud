interface Inputs {
    label?: string;
    inputType?: "text" | "select" | "textarea" | "file";
    option?: string[];
}

interface Props {
    inputs?: Inputs[]
}


function ContactForm({ inputs }: Props) {
    return (
        <div class="pt-[60px] mb-[40px]">
            <div class="mx-auto px-[33px] md:px-0 max-w-[550px] footer-container">
                <div class="px-[2%] w-full lg:w-[80%] lg:mx-auto">
                    <div class=" w-full font-opensans">
                        <div>
                            <form>
                                {inputs?.map((input) => (
                                    <p class="mb-[15px]">
                                        <label class="text-[13px] md:text-[14px] text-black flex flex-col">
                                            {input.label}
                                            <span>
                                                {input.inputType === "text" &&
                                                    <input class="p-[10px] text-black border-b-[1px] border-solid border-[#7d5c27] w-full" />
                                                }
                                                {input.inputType === "select" &&
                                                    <select class="p-[10px] w-full text-black border-b-[1px] border-x-0 border-t-0 border-solid border-[#7d5c27]">
                                                        {input.option?.map((item) => (
                                                            <option value={item}>{item}</option>
                                                        ))}
                                                    </select>}
                                                {input.inputType === "textarea" &&
                                                    <textarea class="w-full min-h-[221px] text-black border-[1px] border-x-0 border-t-0 border-solid border-[#7d5c27]">
                                                    </textarea>}
                                                {input.inputType === "file" && <div class="border-2 border-dashed relative">
                                                    <input type="file" class="opacity-0 absolute top-0 cursor-pointer h-full w-full">
                                                    </input>
                                                    <div class="py-[15px] px-[20px]">
                                                        <div class="overflow-hidden w-full text-center text-ellipsis">
                                                            <h3 class="text-[22px] leading-[32px]">
                                                                Drag & Drop Files Here
                                                            </h3>
                                                            <span>o</span>
                                                            <div><a class="no-underline">Adjuntar archivo</a></div>
                                                        </div>
                                                    </div>
                                                </div>}
                                            </span>
                                        </label>
                                    </p>
                                ))}
                                <p>
                                    <button class="font-opensans submit bg-info-content border-none text-white text-[18px] font-bold py-[12px] px-[20px]">Enviar</button>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm