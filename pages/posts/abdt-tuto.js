import utilStyles from '../../styles/utils.module.css'

export default function AbdtTuto() {
return (
  <section className={utilStyles.abdtTutoStyle}>
      <div className={utilStyles.abdtTutoBg}></div>
      <head>
          <title>Piano tutorial</title>
      </head>
          <h1>Piano piece - Au bord du temps (Keyboard version)</h1>
              <div className={utilStyles.firstSkill}>
                  <video controls width="500" height="300">
                      <source src='/images/ABDT-1st.mov' type="video/mp4"/>
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
