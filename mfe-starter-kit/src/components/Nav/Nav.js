<nav z-progress-tracker="horizontal" 
    style={{
    '--z-progress-track-steps': '3',
    }}>
    <progress max="3" value="2"></progress>
    <div>
        <label>
            <button z-button="round"><b>1</b></button>
            <span>Insurance details</span>
        </label>
        <label aria-current="step">
            <button z-button="round"><b>2</b></button>
            <span>Property information</span>
        </label>
        <label>
            <button z-button="round" disabled>3</button>
            <span>Personal information</span>
        </label>
    </div>
</nav>