<script lang="ts">
    import SettingWrapper from "./SettingWrapper.svelte"
    import Slider from "./Slider.svelte"

    let hue: number = 0
    let saturation: number = 100
    let lightness: number = 50

    $: console.log(hue, saturation, lightness)
</script>

<div class="flex flex-col gap-4">
    <SettingWrapper label="Hue" labelSize="small" value={hue}>
        <Slider
            style="background: linear-gradient(to right, hsl(0, 100%, 50%), hsl(60, 100%, 50%), hsl(120, 100%, 50%), hsl(180, 100%, 50%), hsl(240, 100%, 50%), hsl(300, 100%, 50%), hsl(360, 100%, 50%));"
            min={0}
            max={360}
            step={1}
            value={hue}
            onInput={(e) => (hue = parseInt(e.target.value))}
        />
    </SettingWrapper>

    <SettingWrapper label="Saturation" labelSize="small" value={saturation}>
        <Slider
            style="background: linear-gradient(to right, hsl({hue}, 0%, {lightness}%), hsl({hue}, 100%, {lightness}%));"
            min={0}
            max={100}
            step={1}
            value={saturation}
            onInput={(e) => (saturation = parseInt(e.target.value))}
        />
    </SettingWrapper>

    <SettingWrapper label="Lightness" labelSize="small" value={lightness}>
        <Slider
            style="background: linear-gradient(to right, hsl({hue}, {saturation}%, 0%), hsl({hue}, {saturation}%, 50%), hsl({hue}, {saturation}%, 100%));"
            min={0}
            max={100}
            step={1}
            value={lightness}
            onInput={(e) => (lightness = parseInt(e.target.value))}
        />
    </SettingWrapper>
</div>
