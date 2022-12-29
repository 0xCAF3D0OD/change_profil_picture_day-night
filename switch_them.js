
<img id="day" src="img/0XCAF3_day.png" alt="night">;
<img id="night" src="img/0XCAF3_day.png" alt="night">;

<script>
{
    function switchTheme()
    {
        const dayThemePicture = '0XCAF3_day.png';
        const nightThemePicture = '0XCAF3_night.png';

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        if (mediaQuery.matches)
        {
            document.getElementById('night').src = nightThemePicture;
        }
        else
        {
            document.getElementById('day').src = dayThemePicture;
        }
    }
}
    switchTheme();

    window.addEventListener('load', switchTheme);
    window.addEventListener('resize', switchTheme);
</script>
