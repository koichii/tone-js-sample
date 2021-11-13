//  Tone.js のシンセサイザーを作成
var synth;
synth = new Tone.PolySynth(Tone.Synth).toDestination();

console.log("はじまり！");

// ポンと音をだす
function pon() {

    console.log("pon")
    synth.triggerAttackRelease("C4", "4n"); 
    //高さ（C4 = ド）、長さ（4n = 4分音符）

}

// ドレミファソラシド
function doremi() {
    var now = Tone.now()

    synth.triggerAttackRelease("C4", "2n", now);
    synth.triggerAttackRelease("D4", "2n", now+1);
    synth.triggerAttackRelease("E4", "4n", now+2);
    synth.triggerAttackRelease("F4", "4n", now+3);
    synth.triggerAttackRelease("G4", "8n", now+4.0);
    synth.triggerAttackRelease("A4", "8n", now+4.5);
    synth.triggerAttackRelease("B4", "8n", now+5.0);
    synth.triggerAttackRelease("C5", "8n", now+5.5);
    
}

//和音を出す
function waon() {
    var t = Tone.now()
    
    synth.triggerAttackRelease("C4", "2n", t);
    synth.triggerAttackRelease("E4", "2n", t);
    synth.triggerAttackRelease("G4", "2n", t);
    t = t + 2;

    synth.triggerAttackRelease("B3", "2n", t);
    synth.triggerAttackRelease("D4", "2n", t);
    synth.triggerAttackRelease("F4", "2n", t);
    t = t + 2;

    synth.triggerAttackRelease("C4", "2n", t);
    synth.triggerAttackRelease("E4", "2n", t);
    synth.triggerAttackRelease("G4", "2n", t);
    t = t + 2;
}


//かえるの歌
function melody() {
    var note = [
        "C4","D4","E4","F4","E4","D4","C4","",
        "E4","F4","G4","A4","G4","F4","E4","",
    ];
    var t = Tone.now();
    for (i = 0; i < 16; i++) {
        if (note[i] != "") {
            synth.triggerAttackRelease(note[i], "8n", t);
        }
        t = t + 0.5;
    }
}
