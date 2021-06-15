import utilStyles from '../../styles/utils.module.css'

export default function AbdtTuto() {
return (
  <section className={utilStyles.abdtTutoStyle}>
      <div className={utilStyles.abdtTutoBg}></div>
      <head>
          <title>Piano tutorial</title>
      </head>
          <h1>Piano piece - Au bord du temps (Tuto video part)</h1>
          <h2 className={utilStyles.twoFirstSkillsFont}>
            <p>
            (G) + (K) + (O), alternate with (^)
            </p>
            <p>
            (F) + (N) + (+) + (6), alternate with (9)
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
            (R) + (G) + (^) + (+), alternate with the (7)</p>
            <p>
            (Y) + (N) + (+), alternate with the (I)</p>
          </h3>
              <div className={utilStyles.twoLastSkills}>
                <video className={utilStyles.videoStyles} controls width="500" height="300">
                  <source src='/images/ABDT-3rd.mov' type="video/mp4"/>
                </video>
                <video className={utilStyles.videoStyles} controls width="500" height="300">
                  <source src='/images/ABDT-4th.mov' type="video/mp4"/>
                </video>
              </div>
          <h3>
              <a href="/posts/first-post">
              ← Back to the tuto
              </a>
          </h3>
  </section>
      )
  }
