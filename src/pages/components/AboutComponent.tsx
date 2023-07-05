
export default function AboutComponent() {

  return (
    <div id='aboutComponent' className="contents-gap">
      <div className='componentTitle'>
        <div className='title'>
          About Sunny
        </div>
        <div className='subtitle'>
          “Shine brightly like the sunshine”
        </div>
      </div>

      <div className='body'>
        <span>
          Hello, I&#39;m Sunyoung Ahn &#40;aka. Sunny&#41;, a 23-year-old Frontend Developer.<br/>
          I hold a bachelor&#39;s degree in Software Engineering and I am currently pursuing my master&#39;s degree in Computer Science.
        </span>
      </div>

      <div id='visionDiv'>
        <div className="visionIconDiv">
          <div id="embraceIcon">
            <img src="/embrace_logo.png" alt="Embrace Logo" />
          </div>
          <div className="title">
            <span>Embrace</span>
          </div>
        </div>
        <div className="visionIconDiv">
          <div id="directIcon">
            <img src="/direct_logo.png" alt="Direct Logo" />
          </div>
          <div className="title">
            <span>Direct</span>
          </div>
        </div>
        <div className="visionIconDiv">
          <div id="impactIcon">
            <img src="/impact_logo.png" alt="Impact Logo" />
          </div>
          <div className="title">
            <span>Impact</span>
          </div>
        </div>
      </div>

      <div className='body'>
        <span>
          My key values are <span className="highlightUnderline"><b>embrace</b>, <b>direct</b>, and <b>impact</b></span>. 
          I constantly strive to embrace diverse knowledge, directly reach goals, 
          and make a positive impact on the environment, much like the radiance of <span className="highlightUnderline"><b>sunshine</b></span>. 
          I am fully prepared to bring my potential to the team, the organization, 
          and its products as a whole.
        </span>
      </div>
    </div>
  )
}
