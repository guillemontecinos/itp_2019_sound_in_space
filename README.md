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
Tone was totally new for me, so I had to start from scratch. In order to make this as minimal as possible I decided to play around with mono and poly synths triggered from sequencers. The final version of the piece consists in 3 synths, one for low freqs, one for mid freqs and one for highg freqs. These notes are part of a scale I built from the resonant frequencies I found during the tuning process, which were copied one octave up in order to add more variety of sounds. The final version can be listened [here](https://soundcloud.com/guillemontecinos/sound-in-space-monophonic).

## Stereophonic
Regarding John Cage's thoughts about silence I question myself in terms of why the understanding we have of composing music is about placing a sound source –whatever it is– in a context where the default state is silence (ideally absolute silence). In certain way, we compose in order to break –or disturb– the silence but not to produce silence.

Thinking about this I proposed my self to compose this piece in the opposite approach: let's think of a context where the default sonic state is noise and the composition process is about placing *sources of silence* in the space. The main question here is how can we move silence in a noisy space? or –in this particular case– how can we pan a source silence in a noisy space regarding a stereophonic system?

The second question takes great importance when thinking that general sound systems –Tonejs included– are designed to place a source of sound in a silent space –and not vice versa– what directly affects the technique used to pan the source between L and R channels. In order to approach this problem I designed a stereo panning system that is thought from the paradigm of composing from silence. In this system there is one source of noise `noiseSource` which generates the sonic context in which the composition is listened.

<p align="center">
  <img src="https://github.com/guillemontecinos/itp_spring_2019_sound_in_space/blob/master/02_stereo/scheme.png" align="middle" width="70%">
</p>

That source is split into two gain nodes –`gNoise` and `gSilence`–, the first of them used to actually create the ambient sonic contexts, while the second is used to trigger *silence notes* through the function `gASR()`, which basically is the negation of a note envelope without decay time. Then, in order to pan right and left signals coming from noise and silence gain nodes I set four gain nodes that were tuned following equal energy principle, controlled by the functions `panning()` and `rampPanning()`.

The score for the final 1 minute long piece was designed in terms of how a source of silence can be moved in the space (note that the line and dots represent the source) and can be seen below. To listen the final piece please execute the code under `./02_stereo/tone_sketches/stereo6.js`.

<p align="center">
  <img src="https://github.com/guillemontecinos/itp_spring_2019_sound_in_space/blob/master/02_stereo/stereo_score.jpg" align="middle" width="70%">
</p>
