import React from "react";


type PropsType = {
    siga?: string
    pomidor?: string
    tasks: Array<inArray>
}
type inArray = {
    id: number
    title: string
    isDone: boolean
}

export const Todolist = (props: PropsType) => {
    return (
        <div>
            <div>
                <h3>
                    {props.siga}
                    {props.pomidor}
                </h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                {props.tasks.map(m => {
                    debugger
                    return (
                        <li><input type="checkbox" checked={m.isDone}/> <span>{m.title}</span></li>
                    )
                })}
                <div>
                    <button>Alver</button>
                    <button>Actives</button>
                    <button>Completed</button>
                </div>
            </div>
        </div>
    )
}