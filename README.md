# Sound in Space Blog

## Monophonic
### Previous experiments
The challenge of composing a monophonic piece for a class called *Sound in Space* brought me the question that regarding sound spatial perception is calculated by our brain measuring the difference in time our ears capture sound, *how can I spatialize with only one sound channel?* To afford that I thought that I can make audience feel that sound is spatialized by taking advantage of the physical characteristics of the site where the piece was to be played. So it brought me to the idea of a site-specific piece.

<p align="center">
  <img src="https://github.com/guillemontecinos/itp_spring_2019_sound_in_space/blob/master/01_monophonic/documentation/speaker_display.jpg" align="middle" width="70%">
</p>

My first approach to that was to bring one speaker to the room, place it in a specific orientation towards the wall and activate it with pure tones –later I realized that it is called *tuning the space*. That experiment resulted into a list of frequencies that made different components of the room vibrate –from racks to tables to my head– and I could use to create the sensation of spatial sound.

  * sound can be detected over **33 hz**
  * head vibration at **51 hz**
  * body/table vibration around **73 hz**
  * floor vibration at **93 hz**
  * rack vibration at **115 hz**
  * other rack vibration at **140 hz**
  * other rack vibration at **155 hz**
  * over **150 hz** it gets annoying

Besides of playing just pure tones I played around with phase shifting and harmonic content manipulation, in order to add more information to the sound but limiting the amount of energy used to excite the space. For that I coded a Max patch in which a pure tone was added to the resultant of a phase shifting applied on itself. I liked the idea of using Max, but afterwards I took the chance to learn Tone during this class.

<p align="center">
  <img src="https://github.com/guillemontecinos/itp_spring_2019_sound_in_space/blob/master/01_monophonic/documentation/mono_maxpat.png" align="middle" width="70%">
</p>

### Final version
Tone was totally new for me, so I had to start from scratch. In order to make this as minimal as possible I decided to play around with mono and poly synths triggered from sequencers. The final version of the piece consists in 3 synths, one for low freqs, one for mid freqs and one for highg freqs. These notes are part of a scale I built from the resonant frequencies I found during the tuning process, which were copied one octave up in order to add more variety of sounds.
