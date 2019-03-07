## 1st experiment
* 1 speaker set in the meeting room pointing to the corner of the room

* Check of vibrations (monophonic test 1)
  * sound can be detected over 33 hz
  * head vibration at 51 hz
  * body/table vibration around 73 hz
  * floor vibration at 93 hz
  * rack vibration at 115 hz
  * other rack vibration at 140 hz
  * other rack vibration at 155 hz
  * over 150 hz it gets annoying
* Check for competition of a tone versus it's phase shifted tone
  * it doesn't make any sense because the phase shifting only affects the final mix gain instead of creating a weird sound result
  * Under config monophonic_test2, when dA = 2 * (f1 +/- [1,3]) there is an interesting vibrations
  * config: f1 = 115, dA = 4, A = 4.8 gets interesting results
  * config: f1 = 73, dA = 6, A = -4.2 gets interesting results
* I tried as well with a theremin oscillator configuration but it didn't work very well. config monophonic_test3

## Feb 21st, 2019

During class I talked to Gabe and Yotam and they told me to add sound components to the pure tones in order to send the same energy to the materials but not making it annoying. For examples adding 3th and 4th components or harmonics, and adding a band of noise around the tone.

* make samples of the found freq and play them twice or 3 times f

## March 6th, 2019
From experimental results a tone scale was built and three sets of notes were defined
* Basses
  * 33  Hz
  * 51  Hz
* Mid-notes
  * 73  Hz
  * 93  Hz
  * 115 Hz
  * 140 Hz
  * 155 Hz
* High-notes (double of Mid-notes)
  * 146 Hz
  * 186 Hz
  * 230 Hz
  * 280 Hz
  * 310 Hz
