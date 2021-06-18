import utilStyles from '../../styles/utils.module.css'
export default function FirstPost() {
    return (
<section className={utilStyles.firstPostStyle}>
    <div className={utilStyles.firstPostBg}></div>
    <head>
        <title>Piano tutorial</title>
    </head>
        <h1>Piano piece - Au bord du temps (Keyboard version)</h1>
        <h2 className={utilStyles.fontStyle1}>
            /*(x4) = repeat 4 times*/....../*Use number instead of caracter when it's proposed*/
            <div className={utilStyles.fontStyle2}>
            <p>Click on (G) + (K) + (O) in same time, and alternate with the (^). (x4)</p>
            <p>Click on (F) + (N) + (6), alternate with the (9). (x4)</p>
            <p>Click on (R) + (G) + (right paranthesis) + (+), alternate with the (7). (x4)</p>
            <p>Click on (Y) + (N) + (+) + (V), alternate with the (I). (x4)</p>
            </div>
        </h2>
        <h3>
            <a href="/">
            ‹- Back to home
            </a>
            <a href="/../posts/abdt-tutoWindows">
            Video example
            </a>
            <a href="https://www.musicca.com/fr/piano">
            Go to practice -›
            </a>
        </h3>
</section>
    )
}
