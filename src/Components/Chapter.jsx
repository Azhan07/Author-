import React from 'react'
import Wrapper from './shared/Wrapper'

const Chapter = () => {
    const data = [
        {
            title: "Title Page",
            para: "On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word  and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their."
        },
        {
            title: "Copyright",
            para: "On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word  and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their."
        },
        {
            title: "Table of Contents",
            para: "On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word  and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their."
        },
        {
            title: "Dedication",
            para: "On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word  and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their."
        },
        {
            title: "Foreword",
            para: "On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word  and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their."
        },
        {
            title: "Prologue",
            para: "On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word  and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their."
        }
    ]
    return (
        <Wrapper>
            <section className='pt-[5%]'>

                <h1 className='text-center font-bold text-[60px] pb-10'>What's Inside The Book</h1>
                <div className='grid grid-rows-2 grid-flow-col gap-4 gap-y-10'>
                    {
                        data.map((item)=>{
                            return(
                             <div className='p-7 border-r-4 shadow-lg bg-slate-200'>
                                   <h1 className='font-bold text-[32px] mb-5'>{item.title}</h1>
                                   <p >{item.para}</p>
                             </div>
                            )
                        })
                    }
                </div>

            </section>
        </Wrapper>
    )
}

export default Chapter