import utilStyles from '../../styles/utils.module.css'

export default function AbdtTuto() {
return (
  <section className={utilStyles.abdtTutoStyle}>
      <div className={utilStyles.abdtTutoBg}></div>
      <head>
          <title>Piano tutorial</title>
      </head>
          <h1>Piano tuto - Au bord du temps (Video part)</h1>
          <div className={utilStyles.abdtTitle}>
            Let's see the rhytm of those skills
          </div>
          <h2 className={utilStyles.twoFirstSkillsFont}>
            <p>
            (G) + (K) + (O), alternate with (right paranthesis)
            </p>
            <p>
            (F) + (N) + (6), alternate with (9)
            </p>
          </h2>
              <div className={utilStyles.twoFirstSkills}>
                  <video className={utilStyles.videoStyles} controls width="500" height="300">
                      <source src='/images/ABDT-1st.mov' type="video/mp4"/>
                  </video>
                  <video className={utilStyles.videoStyles} controls width="500" height="300">
                      <source src='/images/ABDT-2nd.mov' type="video/mp4"/>
                  </video>
              </div>
          <h3 className={utilStyles.twoLastSkillsFont}>
            <p>
            (R) + (G) + (right paranthesis) + (+), alternate with the (7)</p>
            <p>
            (Y) + (N) + (+) + (V), alternate with the (I)</p>
          </h3>
              <div className={utilStyles.twoLastSkills}>
                <video className={utilStyles.videoStyles} controls width="500" height="300">
                  <source src='/images/ABDT-3rd.mov' type="video/mp4"/>
                </video>
                <video className={utilStyles.videoStyles} controls width="500" height="300">
                  <source src='/images/ABDT-4th.mov' type="video/mp4"/>
                </video>
              </div>
              <a href="/posts/first-postWindows">
              ← Back to the tuto
              </a>
  </section>
      )
  }
