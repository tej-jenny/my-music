import React from 'react'
import PlayButton from './PlayButton'
import Duration from './Duration'
import Volume from './Volume'

const MainController = () => {
    return (
        <section className="controllers">
            <div>
                <PlayButton />
                <Duration />
            </div>
            <Volume />
        </section>

    )
}

export default MainController
