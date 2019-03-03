{
	"patcher" : 	{
		"fileversion" : 1,
		"appversion" : 		{
			"major" : 8,
			"minor" : 0,
			"revision" : 3,
			"architecture" : "x64",
			"modernui" : 1
		}
,
		"classnamespace" : "box",
		"rect" : [ 995.0, 171.0, 627.0, 548.0 ],
		"bglocked" : 0,
		"openinpresentation" : 0,
		"default_fontsize" : 12.0,
		"default_fontface" : 0,
		"default_fontname" : "Arial",
		"gridonopen" : 1,
		"gridsize" : [ 15.0, 15.0 ],
		"gridsnaponopen" : 1,
		"objectsnaponopen" : 1,
		"statusbarvisible" : 2,
		"toolbarvisible" : 1,
		"lefttoolbarpinned" : 0,
		"toptoolbarpinned" : 0,
		"righttoolbarpinned" : 0,
		"bottomtoolbarpinned" : 0,
		"toolbars_unpinned_last_save" : 0,
		"tallnewobj" : 0,
		"boxanimatetime" : 200,
		"enablehscroll" : 1,
		"enablevscroll" : 1,
		"devicewidth" : 0.0,
		"description" : "",
		"digest" : "",
		"tags" : "",
		"style" : "",
		"subpatcher_template" : "",
		"boxes" : [ 			{
				"box" : 				{
					"id" : "obj-7",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 296.0, 32.0, 34.0, 22.0 ],
					"text" : "pack"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-3",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "int", "int" ],
					"patching_rect" : [ 296.0, 5.0, 41.0, 22.0 ],
					"text" : "notein"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-30",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 309.0, 119.0, 53.0, 22.0 ],
					"text" : "route 72"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-23",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "float" ],
					"patching_rect" : [ 309.0, 151.0, 39.0, 22.0 ],
					"text" : "/ 100."
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-22",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "signal" ],
					"patching_rect" : [ 289.0, 229.0, 29.5, 22.0 ],
					"text" : "*~"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-20",
					"maxclass" : "number",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 529.0, 147.0, 50.0, 22.0 ]
				}

			}
, 			{
				"box" : 				{
					"format" : 6,
					"id" : "obj-18",
					"maxclass" : "flonum",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 475.0, 147.0, 50.0, 22.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-16",
					"maxclass" : "number",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 421.0, 147.0, 50.0, 22.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-14",
					"maxclass" : "number",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 367.0, 147.0, 50.0, 22.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-12",
					"maxclass" : "newobj",
					"numinlets" : 5,
					"numoutlets" : 4,
					"outlettype" : [ "signal", "signal", "", "" ],
					"patching_rect" : [ 313.0, 191.0, 235.0, 22.0 ],
					"text" : "adsr~ 10 100 0.8 1000"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-11",
					"maxclass" : "gain~",
					"multichannelvariant" : 0,
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "signal", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 289.0, 261.0, 22.0, 140.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-4",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "signal" ],
					"patching_rect" : [ 264.0, 191.0, 44.0, 22.0 ],
					"text" : "noise~"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-10",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 28.5, 67.0, 101.0, 22.0 ],
					"text" : "prepend midinote"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-9",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "signal" ],
					"patching_rect" : [ 28.5, 99.0, 208.0, 22.0 ],
					"text" : "poly~ monophonic_voice 16 @steal 1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-78",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 28.5, 36.0, 34.0, 22.0 ],
					"text" : "pack"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-39",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "int", "int" ],
					"patching_rect" : [ 28.5, 5.0, 41.0, 22.0 ],
					"text" : "notein"
				}

			}
, 			{
				"box" : 				{
					"bufsize" : 126,
					"calccount" : 13,
					"id" : "obj-5",
					"maxclass" : "scope~",
					"numinlets" : 2,
					"numoutlets" : 0,
					"patching_rect" : [ 89.0, 165.0, 130.0, 130.0 ],
					"trigger" : 1
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-2",
					"maxclass" : "gain~",
					"multichannelvariant" : 0,
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "signal", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 29.5, 136.0, 22.0, 140.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1",
					"maxclass" : "ezdac~",
					"numinlets" : 2,
					"numoutlets" : 0,
					"patching_rect" : [ 29.5, 390.0, 45.0, 45.0 ]
				}

			}
, 			{
				"box" : 				{
					"attr" : "calccount",
					"id" : "obj-6",
					"maxclass" : "attrui",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 89.0, 136.0, 150.0, 22.0 ]
				}

			}
 ],
		"lines" : [ 			{
				"patchline" : 				{
					"destination" : [ "obj-9", 0 ],
					"source" : [ "obj-10", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 1 ],
					"order" : 0,
					"source" : [ "obj-11", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"order" : 1,
					"source" : [ "obj-11", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-22", 1 ],
					"source" : [ "obj-12", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-12", 1 ],
					"source" : [ "obj-14", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-12", 2 ],
					"source" : [ "obj-16", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-12", 3 ],
					"source" : [ "obj-18", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 1 ],
					"order" : 1,
					"source" : [ "obj-2", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"order" : 2,
					"source" : [ "obj-2", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-5", 0 ],
					"order" : 0,
					"source" : [ "obj-2", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-12", 4 ],
					"source" : [ "obj-20", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-11", 0 ],
					"source" : [ "obj-22", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-12", 0 ],
					"source" : [ "obj-23", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-7", 1 ],
					"source" : [ "obj-3", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-7", 0 ],
					"source" : [ "obj-3", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-23", 0 ],
					"source" : [ "obj-30", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-78", 1 ],
					"source" : [ "obj-39", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-78", 0 ],
					"source" : [ "obj-39", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-22", 0 ],
					"source" : [ "obj-4", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-5", 0 ],
					"source" : [ "obj-6", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-30", 0 ],
					"source" : [ "obj-7", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-10", 0 ],
					"source" : [ "obj-78", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2", 0 ],
					"source" : [ "obj-9", 0 ]
				}

			}
 ],
		"parameters" : 		{
			"obj-9.3::obj-27" : [ "flonum[2]", "flonum", 0 ],
			"obj-9.5::obj-24" : [ "number[14]", "number[2]", 0 ],
			"obj-9.13::obj-24" : [ "number[38]", "number[2]", 0 ],
			"obj-9.6::obj-27" : [ "flonum[5]", "flonum", 0 ],
			"obj-9.4::obj-22" : [ "number[11]", "number[2]", 0 ],
			"obj-9.14::obj-27" : [ "flonum[13]", "flonum", 0 ],
			"obj-9.6::obj-24" : [ "number[17]", "number[2]", 0 ],
			"obj-9.10::obj-22" : [ "number[31]", "number[2]", 0 ],
			"obj-9.14::obj-67" : [ "number[41]", "number[2]", 0 ],
			"obj-9.16::obj-67" : [ "number[48]", "number[2]", 0 ],
			"obj-9.7::obj-27" : [ "flonum[6]", "flonum", 0 ],
			"obj-9.8::obj-22" : [ "number[23]", "number[2]", 0 ],
			"obj-9.16::obj-22" : [ "number[49]", "number[2]", 0 ],
			"obj-9.11::obj-67" : [ "number[34]", "number[2]", 0 ],
			"obj-9.12::obj-24" : [ "number[36]", "number[2]", 0 ],
			"obj-9.15::obj-67" : [ "number[46]", "number[2]", 0 ],
			"obj-9.2::obj-22" : [ "number[7]", "number[2]", 0 ],
			"obj-9.3::obj-22" : [ "number[9]", "number[2]", 0 ],
			"obj-9.8::obj-27" : [ "flonum[7]", "flonum", 0 ],
			"obj-9.16::obj-24" : [ "number[47]", "number[2]", 0 ],
			"obj-9.1::obj-27" : [ "flonum", "flonum", 0 ],
			"obj-9.1::obj-22" : [ "number[3]", "number[2]", 0 ],
			"obj-9.7::obj-67" : [ "number[22]", "number[2]", 0 ],
			"obj-9.11::obj-22" : [ "number[32]", "number[2]", 0 ],
			"obj-9.11::obj-24" : [ "number[33]", "number[2]", 0 ],
			"obj-9.8::obj-24" : [ "number[25]", "number[2]", 0 ],
			"obj-9.9::obj-67" : [ "number[27]", "number[2]", 0 ],
			"obj-9.15::obj-24" : [ "number[45]", "number[2]", 0 ],
			"obj-9.2::obj-27" : [ "flonum[1]", "flonum", 0 ],
			"obj-9.9::obj-22" : [ "number[28]", "number[2]", 0 ],
			"obj-9.3::obj-24" : [ "number[8]", "number[2]", 0 ],
			"obj-9.10::obj-24" : [ "number[30]", "number[2]", 0 ],
			"obj-9.3::obj-67" : [ "number[10]", "number[2]", 0 ],
			"obj-9.15::obj-27" : [ "flonum[14]", "flonum", 0 ],
			"obj-9.4::obj-27" : [ "flonum[3]", "flonum", 0 ],
			"obj-9.16::obj-27" : [ "flonum[15]", "flonum", 0 ],
			"obj-9.1::obj-24" : [ "number[4]", "number[2]", 0 ],
			"obj-9.12::obj-27" : [ "flonum[11]", "flonum", 0 ],
			"obj-9.14::obj-22" : [ "number[43]", "number[2]", 0 ],
			"obj-9.4::obj-24" : [ "number[12]", "number[2]", 0 ],
			"obj-9.9::obj-24" : [ "number[26]", "number[2]", 0 ],
			"obj-9.5::obj-27" : [ "flonum[4]", "flonum", 0 ],
			"obj-9.12::obj-67" : [ "number[35]", "number[2]", 0 ],
			"obj-9.10::obj-27" : [ "flonum[9]", "flonum", 0 ],
			"obj-9.11::obj-27" : [ "flonum[10]", "flonum", 0 ],
			"obj-9.7::obj-22" : [ "number[21]", "number[2]", 0 ],
			"obj-9.13::obj-27" : [ "flonum[12]", "flonum", 0 ],
			"obj-9.8::obj-67" : [ "number[24]", "number[2]", 0 ],
			"obj-9.15::obj-22" : [ "number[44]", "number[2]", 0 ],
			"obj-9.2::obj-67" : [ "number[6]", "number[2]", 0 ],
			"obj-9.4::obj-67" : [ "number[13]", "number[2]", 0 ],
			"obj-9.12::obj-22" : [ "number[37]", "number[2]", 0 ],
			"obj-9.5::obj-67" : [ "number[15]", "number[2]", 0 ],
			"obj-9.13::obj-22" : [ "number[39]", "number[2]", 0 ],
			"obj-9.5::obj-22" : [ "number[16]", "number[2]", 0 ],
			"obj-9.7::obj-24" : [ "number[20]", "number[2]", 0 ],
			"obj-9.10::obj-67" : [ "number[29]", "number[2]", 0 ],
			"obj-9.13::obj-67" : [ "number[40]", "number[2]", 0 ],
			"obj-9.6::obj-22" : [ "number[18]", "number[2]", 0 ],
			"obj-9.9::obj-27" : [ "flonum[8]", "flonum", 0 ],
			"obj-9.14::obj-24" : [ "number[42]", "number[2]", 0 ],
			"obj-9.1::obj-67" : [ "number[2]", "number[2]", 0 ],
			"obj-9.6::obj-67" : [ "number[19]", "number[2]", 0 ],
			"obj-9.2::obj-24" : [ "number[5]", "number[2]", 0 ],
			"parameterbanks" : 			{

			}

		}
,
		"dependency_cache" : [ 			{
				"name" : "monophonic_voice.maxpat",
				"bootpath" : "~/Documents/Github/itp_spring_2019_sound_in_space/01_monophonic",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
 ],
		"autosave" : 0
	}

}
