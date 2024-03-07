// TODO: should be exported by smplr.js
type UnknownData = Record<string, unknown>;

export interface Room extends UnknownData {
  name: string;
  available: boolean
}
export const tables = [
  {
    "id": "58893977-b94e-42bb-be82-20fc760f5b0a",
    "name": "Discussion Room",
    "available": "yes",
    "region": "green",
    "furnitureId": "288fba0a-7e93-46e0-ba95-caae50b778a4",
    "layerType": "furniture"
  },
  {
    "id": "f72fbb4f-4d8c-4008-9473-bf5bd67e39dc",
    "name": "Meeting Room A",
    "region": "red",
    "furnitureId": "5e6b08ea-043d-4b3f-9df6-dd4a79508d70",
    "layerType": "furniture"
  }
]

export const zones = [
  {
      "id": "c3f83b63-f1b3-4f8a-a5a9-926e216f66e8",
      "name": "Other Zones",
      "color": "#edea1f",
      "coordinates": [
          {
              "x": 16.353455817717844,
              "z": -41.19752315542638,
              "levelIndex": 0
          },
          {
              "x": 21.938738943933206,
              "z": -41.380439669117315,
              "levelIndex": 0
          },
          {
              "x": 22.212066961768787,
              "z": -43.486005041655545,
              "levelIndex": 0
          },
          {
              "x": 25.232871036334718,
              "z": -43.57753542202185,
              "levelIndex": 0
          },
          {
              "x": 25.232762593725116,
              "z": -40.00751243757798,
              "levelIndex": 0
          },
          {
              "x": 38.04830888856828,
              "z": -39.36673509525441,
              "levelIndex": 0
          },
          {
              "x": 56.81373741820699,
              "z": -29.11482962963047,
              "levelIndex": 0
          },
          {
              "x": 61.63995644795312,
              "z": -37.31940933649061,
              "levelIndex": 0
          },
          {
              "x": 60.600263682413,
              "z": -45.48500102413432,
              "levelIndex": 0
          },
          {
              "x": 60.08085527873854,
              "z": -53.873966439147765,
              "levelIndex": 0
          },
          {
              "x": 64.83193288815298,
              "z": -54.69053882214707,
              "levelIndex": 0
          },
          {
              "x": 72.62677257448829,
              "z": -50.23647990478251,
              "levelIndex": 0
          },
          {
              "x": 74.48173018688476,
              "z": -46.45001187308067,
              "levelIndex": 0
          },
          {
              "x": 74.11070450742002,
              "z": -41.10530438092122,
              "levelIndex": 0
          },
          {
              "x": 73.59109054707699,
              "z": -40.06604529992547,
              "levelIndex": 0
          },
          {
              "x": 73.73963637190471,
              "z": -37.24518837383706,
              "levelIndex": 0
          },
          {
              "x": 82.79612649321432,
              "z": -36.57708631210664,
              "levelIndex": 0
          },
          {
              "x": 89.0335235698049,
              "z": -37.02246168939215,
              "levelIndex": 0
          },
          {
              "x": 94.67202209673586,
              "z": -33.97904654878959,
              "levelIndex": 0
          },
          {
              "x": 104.63913959527086,
              "z": -33.51548768763064,
              "levelIndex": 0
          },
          {
              "x": 104.86830076166346,
              "z": -7.798447595625408,
              "levelIndex": 0
          },
          {
              "x": 16.22462808630269,
              "z": -7.684652408535765,
              "levelIndex": 0
          }
      ],
      "layerType": "polygon",
      "mapped": true
  },
  {
      "id": "0ef03250-51ff-48ee-9b91-e559c40c17e8",
      "name": "Zone A",
      "color": "#ff0000",
      "levelIndex": 0,
      "coordinates": [
          {
              "x": 49.666345234482584,
              "z": -65.07823314430485,
              "levelIndex": 0
          },
          {
              "x": 50.05123436040229,
              "z": -59.497467355299385,
              "levelIndex": 0
          },
          {
              "x": 59.962187181458276,
              "z": -53.243089709597555,
              "levelIndex": 0
          },
          {
              "x": 60.05887491666927,
              "z": -49.202033268195784,
              "levelIndex": 0
          },
          {
              "x": 57.94187726698064,
              "z": -49.394487088507375,
              "levelIndex": 0
          },
          {
              "x": 57.74887775344278,
              "z": -45.641411177270186,
              "levelIndex": 0
          },
          {
              "x": 60.443816464697896,
              "z": -45.64164039428036,
              "levelIndex": 0
          },
          {
              "x": 61.50241963328934,
              "z": -37.75093997216213,
              "levelIndex": 0
          },
          {
              "x": 56.69078412191385,
              "z": -28.994588634706098,
              "levelIndex": 0
          },
          {
              "x": 38.21517443922058,
              "z": -39.579282002620175,
              "levelIndex": 0
          },
          {
              "x": 25.12917343719551,
              "z": -40.06052227797597,
              "levelIndex": 0
          },
          {
              "x": 25.320704010317826,
              "z": -43.813317449813354,
              "levelIndex": 0
          },
          {
              "x": 22.146335050884044,
              "z": -43.90948374158222,
              "levelIndex": 0
          },
          {
              "x": 21.95381401634612,
              "z": -41.50388639134222,
              "levelIndex": 0
          },
          {
              "x": 16.180368505235442,
              "z": -41.40766371845724,
              "levelIndex": 0
          },
          {
              "x": 16.18119139651033,
              "z": -65.17444976435283,
              "levelIndex": 0
          }
      ],
      "layerType": "polygon",
      "mapped": true
  }
]

export const groupsPrev = [
    {
        "id": "28d6bd41-18f4-4cbe-8dba-aba030a5919e",
        "name": "Group 2 HR2",
        "levelIndex": 0,
        "latestValue": "30%",
        "coordinates": [
            {
                "x": 35.08303503239866,
                "z": -65.60856888167221,
                "levelIndex": 0
            },
            {
                "x": 35.08308542364017,
                "z": -61.512830495409254,
                "levelIndex": 0
            },
            {
                "x": 15.893779886556512,
                "z": -61.36057526475035,
                "levelIndex": 0
            },
            {
                "x": 15.93028397325304,
                "z": -65.64670713910343,
                "levelIndex": 0
            }
        ],
        "layerType": "polygon",
        "mapped": false
    },
    {
        "id": "c9946c18-e23e-4dd1-8edd-484e8d70a0f1",
        "name": "Group 1 HR1",
        "levelIndex": 0,
        "latestValue": "20%",
        "coordinates": [
            {
                "x": 15.931144680630052,
                "z": -51.234837970168414,
                "levelIndex": 0
            },
            {
                "x": 24.575571236808265,
                "z": -51.15857072017563,
                "levelIndex": 0
            },
            {
                "x": 24.500057750413387,
                "z": -61.43772492021794,
                "levelIndex": 0
            },
            {
                "x": 16.045397770602754,
                "z": -61.36045455932617,
                "levelIndex": 0
            }
        ],
        "layerType": "polygon",
        "mapped": false
    },
    {
        "id": "39e6baf3-f592-4b78-ae7e-7fc74afc78a6",
        "name": "Group 3",
        "levelIndex": 0,
        "latestValue": "40%",
        "coordinates": [
            {
                "x": 35.922624719502856,
                "z": -61.40717895429596,
                "levelIndex": 0
            },
            {
                "x": 35.87935311101513,
                "z": -56.089359283447266,
                "levelIndex": 0
            },
            {
                "x": 24.500691583388736,
                "z": -56.12736837766067,
                "levelIndex": 0
            },
            {
                "x": 24.42502327009124,
                "z": -61.43718599932817,
                "levelIndex": 0
            }
        ],
        "layerType": "polygon",
        "mapped": false
    },
    {
        "id": "4fd081d4-1d07-42ee-93a4-de88101dcd03",
        "name": "Group 4 Downtown",
        "levelIndex": 0,
        "latestValue": "50%",
        "coordinates": [
            {
                "x": 38.11711693328822,
                "z": -65.64670713910343,
                "levelIndex": 0
            },
            {
                "x": 38.041253115915666,
                "z": -61.36112395226441,
                "levelIndex": 0
            },
            {
                "x": 35.13277174589908,
                "z": -61.45201550413691,
                "levelIndex": 0
            },
            {
                "x": 35.09499762653117,
                "z": -65.68700455592874,
                "levelIndex": 0
            }
        ],
        "layerType": "polygon",
        "mapped": false
    },
    {
        "id": "39eac082-c2cd-4885-8f86-46ffea347213",
        "name": "Group 6 Fort Canning",
        "levelIndex": 0,
        "latestValue": "30%",
        "coordinates": [
            {
                "x": 30.1144795562729,
                "z": -56.20306316830131,
                "levelIndex": 0
            },
            {
                "x": 30.038585840535056,
                "z": -54.193006487117984,
                "levelIndex": 0
            },
            {
                "x": 32.867599297940345,
                "z": -54.26885986328125,
                "levelIndex": 0
            },
            {
                "x": 32.80730647538341,
                "z": -56.12707286878818,
                "levelIndex": 0
            }
        ],
        "layerType": "polygon",
        "mapped": false
    },
    {
        "id": "4674f0b2-6874-40e5-925e-ac4da90bf25f",
        "name": "Group 5 Telok Ayer",
        "levelIndex": 0,
        "latestValue": "0%",
        "coordinates": [
            {
                "x": 35.72767286646696,
                "z": -54.2688608606894,
                "levelIndex": 0
            },
            {
                "x": 35.72768771879973,
                "z": -56.08935762072301,
                "levelIndex": 0
            },
            {
                "x": 32.932308197021484,
                "z": -56.1607608600008,
                "levelIndex": 0
            },
            {
                "x": 32.901567357539456,
                "z": -54.26713105899467,
                "levelIndex": 0
            }
        ],
        "layerType": "polygon",
        "mapped": false
    },
    {
        "id": "135e41ec-1181-480f-9af4-0d5a7f6daa72",
        "name": "Group 7 HR Corridor",
        "levelIndex": 0,
        "latestValue": "30%",
        "coordinates": [
            {
                "x": 35.651795623628544,
                "z": -51.538086180014396,
                "levelIndex": 0
            },
            {
                "x": 38.0412267909919,
                "z": -51.46223082174794,
                "levelIndex": 0
            },
            {
                "x": 38.0823602033545,
                "z": -61.37639197289311,
                "levelIndex": 0
            },
            {
                "x": 35.88907525338988,
                "z": -61.338575351770196,
                "levelIndex": 0
            }
        ],
        "layerType": "polygon",
        "mapped": false
    },
    {
        "id": "5b706517-c378-4a42-8d86-49dbfd965c98",
        "name": "Group 8 DSTA",
        "levelIndex": 0,
        "latestValue": "70%",
        "coordinates": [
            {
                "x": 15.929069356975091,
                "z": -43.64898241537468,
                "levelIndex": 0
            },
            {
                "x": 35.68965990922036,
                "z": -43.87655686039575,
                "levelIndex": 0
            },
            {
                "x": 35.69992166433062,
                "z": -51.58218995262555,
                "levelIndex": 0
            },
            {
                "x": 32.31417782045751,
                "z": -51.57601384889021,
                "levelIndex": 0
            },
            {
                "x": 32.23831662333545,
                "z": -51.196736852410886,
                "levelIndex": 0
            },
            {
                "x": 15.959897586819796,
                "z": -51.16620675079364,
                "levelIndex": 0
            }
        ],
        "layerType": "polygon",
        "mapped": false
    },
    {
        "id": "ea3401f6-0590-40d4-b714-15bc4a3e9290",
        "name": "Group 16 Raffles Place 1",
        "levelIndex": 0,
        "latestValue": "15%",
        "coordinates": [
            {
                "x": 44.03325733477849,
                "z": -65.7216976998077,
                "levelIndex": 0
            },
            {
                "x": 43.95759829581212,
                "z": -59.88200759887695,
                "levelIndex": 0
            },
            {
                "x": 38.07917571736565,
                "z": -59.80615625359861,
                "levelIndex": 0
            },
            {
                "x": 38.08236906943478,
                "z": -65.57378640364642,
                "levelIndex": 0
            }
        ],
        "layerType": "polygon",
        "mapped": false
    },
    {
        "id": "ebb0ddd5-0659-4154-8801-b3d8c375d49b",
        "name": "Group 17 Raffles Place 2",
        "levelIndex": 0,
        "latestValue": "25%",
        "coordinates": [
            {
                "x": 49.988020722161785,
                "z": -65.64670713910343,
                "levelIndex": 0
            },
            {
                "x": 49.949474905067376,
                "z": -59.80571844423351,
                "levelIndex": 0
            },
            {
                "x": 43.9059209874708,
                "z": -59.82599182511469,
                "levelIndex": 0
            },
            {
                "x": 43.98150446701379,
                "z": -65.64941478729217,
                "levelIndex": 0
            }
        ],
        "layerType": "polygon",
        "mapped": false
    },
    {
        "id": "cba9ce33-5831-4a61-869c-92430b51f338",
        "name": "Group 9 Bar",
        "levelIndex": 0,
        "latestValue": "30%",
        "coordinates": [
            {
                "x": 49.94758376774291,
                "z": -59.68071746826172,
                "levelIndex": 0
            },
            {
                "x": 48.853252538364806,
                "z": -59.75745888117793,
                "levelIndex": 0
            },
            {
                "x": 48.43178955131167,
                "z": -55.19441120299601,
                "levelIndex": 0
            },
            {
                "x": 55.43676753055102,
                "z": -51.08353449747269,
                "levelIndex": 0
            },
            {
                "x": 55.3817229685769,
                "z": -47.92426116207688,
                "levelIndex": 0
            },
            {
                "x": 56.81361910774885,
                "z": -45.31424245618501,
                "levelIndex": 0
            },
            {
                "x": 57.66934134323372,
                "z": -45.24926218964791,
                "levelIndex": 0
            },
            {
                "x": 57.85708455366638,
                "z": -49.67684821232201,
                "levelIndex": 0
            },
            {
                "x": 59.8508060008423,
                "z": -49.667851799503254,
                "levelIndex": 0
            },
            {
                "x": 59.9150685324574,
                "z": -53.768769490724445,
                "levelIndex": 0
            }
        ],
        "layerType": "polygon",
        "mapped": true
    },
    {
        "id": "861db743-ae69-4d1c-9ef2-a34701b22ea9",
        "name": "Group 11 City Hall",
        "levelIndex": 0,
        "latestValue": "20%",
        "coordinates": [
            {
                "x": 43.33269370913263,
                "z": -57.3589269877327,
                "levelIndex": 0
            },
            {
                "x": 40.18059126430316,
                "z": -57.29460026146886,
                "levelIndex": 0
            },
            {
                "x": 40.11617457704412,
                "z": -54.20690376213919,
                "levelIndex": 0
            },
            {
                "x": 43.203961804416394,
                "z": -54.27123104508433,
                "levelIndex": 0
            }
        ],
        "layerType": "polygon",
        "mapped": false
    },
    {
        "id": "7c8299c8-1d66-4d05-8688-7f9a8a4b98f6",
        "name": "Group 10 Newton",
        "levelIndex": 0,
        "latestValue": "12%",
        "coordinates": [
            {
                "x": 40.116086478806565,
                "z": -51.11918054191827,
                "levelIndex": 0
            },
            {
                "x": 43.20388395295186,
                "z": -51.054852690686594,
                "levelIndex": 0
            },
            {
                "x": 43.13865804637153,
                "z": -54.14355323914859,
                "levelIndex": 0
            },
            {
                "x": 40.087212291731944,
                "z": -54.11257008862879,
                "levelIndex": 0
            }
        ],
        "layerType": "polygon",
        "mapped": true
    },
    {
        "id": "79121961-65c4-4c13-a34a-8114e8694c78",
        "name": "Group 12 Marina Bay",
        "levelIndex": 0,
        "latestValue": "30%",
        "coordinates": [
            {
                "x": 43.2672454399694,
                "z": -50.92699343790181,
                "levelIndex": 0
            },
            {
                "x": 38.057549749440255,
                "z": -50.99052482785715,
                "levelIndex": 0
            },
            {
                "x": 38.057412323554246,
                "z": -46.61620294692162,
                "levelIndex": 0
            },
            {
                "x": 43.33147142375541,
                "z": -46.6166818243424,
                "levelIndex": 0
            }
        ],
        "layerType": "polygon",
        "mapped": true
    },
    {
        "id": "0962c1de-d20f-4e70-af2e-49e4d7dabf37",
        "name": "Group 13 Woodlands",
        "levelIndex": 0,
        "latestValue": "40%",
        "coordinates": [
            {
                "x": 38.25039030477711,
                "z": -46.42311493677003,
                "levelIndex": 0
            },
            {
                "x": 38.37760034724928,
                "z": -39.47580518763064,
                "levelIndex": 0
            },
            {
                "x": 43.20256698178083,
                "z": -36.645117735472205,
                "levelIndex": 0
            },
            {
                "x": 44.93964535070592,
                "z": -39.34713806332819,
                "levelIndex": 0
            },
            {
                "x": 44.94067023054748,
                "z": -46.42321692287921,
                "levelIndex": 0
            }
        ],
        "layerType": "polygon",
        "mapped": true
    },
    {
        "id": "01ed7b7d-5f67-4357-bd02-23342466b400",
        "name": "Group 14 Small Room",
        "levelIndex": 0,
        "latestValue": "60%",
        "coordinates": [
            {
                "x": 48.47790883452271,
                "z": -33.6214040614061,
                "levelIndex": 0
            },
            {
                "x": 50.60154685945762,
                "z": -37.35275604864691,
                "levelIndex": 0
            },
            {
                "x": 52.53144702486263,
                "z": -36.323469325241014,
                "levelIndex": 0
            },
            {
                "x": 50.4728193519998,
                "z": -32.592280062459736,
                "levelIndex": 0
            }
        ],
        "layerType": "polygon",
        "mapped": true
    },
    {
        "id": "787d5a8c-7d2f-430b-aaf4-548914d4728b",
        "groupName": "Group 15 Orchard",
        "levelIndex": 0,
        "latestValue": "90%",
        "coordinates": [
            {
                "x": 52.46711510056178,
                "z": -36.194808276042686,
                "levelIndex": 0
            },
            {
                "x": 58.70716404107837,
                "z": -32.65661124237808,
                "levelIndex": 0
            },
            {
                "x": 56.7128895669366,
                "z": -28.989715475470227,
                "levelIndex": 0
            },
            {
                "x": 50.4728193519998,
                "z": -32.592280062459736,
                "levelIndex": 0
            }
        ],
        "layerType": "polygon",
        "mapped": true
    }
]

export const pirSensorsPrev = [
    {
        "id": "c18576c5-783c-463e-b5b6-ea55f8cac6b7",
        "name": "PIR6",
        "levelIndex": 0,
        "position": {
            "x": 18.764065522109874,
            "z": -65.26957127579414,
            "elevation": 0.009999999776482582,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "aed5e677-0f76-4181-bac6-f430a301896e",
        "name": "PIR3",
        "levelIndex": 0,
        "position": {
            "x": 21.77456653450642,
            "z": -65.2511993341016,
            "elevation": 0.009999999776489688,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "f3f56a92-2950-40c0-8a3c-ed1d9d3c9a83",
        "name": "PIR12",
        "levelIndex": 0,
        "position": {
            "x": 18.30949997135052,
            "z": -61.54227840512246,
            "elevation": 0.009999999776489688,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "5f39639f-77f5-4f83-9b38-1d3d3559a05f",
        "name": "PIR21",
        "levelIndex": 0,
        "position": {
            "x": 21.70637574525052,
            "z": -61.80866314305016,
            "elevation": 0.009999999776482582,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "f969f708-fa67-423b-8918-18f7bed001df",
        "name": "PIR16",
        "levelIndex": 0,
        "position": {
            "x": 18.236172765734437,
            "z": -59.80086639068821,
            "elevation": 0.7100000021606689,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "dcb0225d-dc40-4904-8b31-1d8dfcc31c3b",
        "name": "PIR11",
        "levelIndex": 0,
        "position": {
            "x": 18.23711847402234,
            "z": -57.807400265786136,
            "elevation": 0.009999999776496793,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "fa604379-dedf-4f93-a41d-beadc55523c0",
        "name": "PIR10",
        "levelIndex": 0,
        "position": {
            "x": 18.19949913586908,
            "z": -56.067282544542444,
            "elevation": 0.45932408682013204,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "1d77c654-2ed0-4e59-b114-cdeeb92b950e",
        "name": "PIR5",
        "levelIndex": 0,
        "position": {
            "x": 18.141405306802028,
            "z": -54.450641673376396,
            "elevation": 0.46000000216066894,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "c398871c-32a6-471f-ac1a-7493d83ced88",
        "name": "PIR20",
        "levelIndex": 0,
        "position": {
            "x": 21.494658333441116,
            "z": -60.01724633291758,
            "elevation": 0.7100000021606689,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "c703cdce-1caf-4cb7-944c-958bd8f8c5fa",
        "name": "PIR7",
        "levelIndex": 0,
        "position": {
            "x": 21.491409958876623,
            "z": -57.83546256728119,
            "elevation": 0.009999999776489688,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "a882beb3-8814-427c-9bc1-9c7308682dd7",
        "name": "PIR26",
        "levelIndex": 0,
        "position": {
            "x": 21.37791142878018,
            "z": -56.28246604235413,
            "elevation": 0.7100000021606689,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "1c62b1d6-ff2e-4dcc-940d-e6f0771e25de",
        "name": "PIR1",
        "levelIndex": 0,
        "position": {
            "x": 21.326022416401628,
            "z": -54.19193204020788,
            "elevation": 0.009999999776482582,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "3050dae6-015a-4cb3-9592-43f0f1b4e224",
        "name": "PIR9",
        "levelIndex": 0,
        "position": {
            "x": 37.92682930141076,
            "z": -65.39155618013713,
            "elevation": 0.009999999776489688,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "c1f20caa-e437-40d3-b1a8-bf88882ffa64",
        "name": "PIR13",
        "levelIndex": 0,
        "position": {
            "x": 37.05758924623715,
            "z": -62.38479369731341,
            "elevation": 0.009999999776489688,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "6f68ba5f-606d-4b6e-b1af-91447f6d9d1e",
        "name": "PIR4",
        "levelIndex": 0,
        "position": {
            "x": 32.8138033412567,
            "z": -65.37497516283096,
            "elevation": 0.009999999776496793,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "ec94d9be-aae6-46e6-b8c9-34a3899c03a1",
        "name": "PIR8",
        "levelIndex": 0,
        "position": {
            "x": 29.182002779173374,
            "z": -65.34935392927908,
            "elevation": 0.009999999776482582,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "1ef8f3bc-c720-4126-97d0-935eb31f65b1",
        "name": "PIR17",
        "levelIndex": 0,
        "position": {
            "x": 25.62120249923887,
            "z": -64.03310692383849,
            "elevation": 0.009999999776489688,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "3682321d-d81b-4041-b855-42a0a007e1a4",
        "name": "PIR25",
        "levelIndex": 0,
        "position": {
            "x": 25.38922977355764,
            "z": -61.97704015578414,
            "elevation": 0.009999999776482582,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "7756539f-79f2-49a3-a2b0-c9472f582b2b",
        "name": "PIR37",
        "levelIndex": 0,
        "position": {
            "x": 25.233234861045418,
            "z": -59.58513372772587,
            "elevation": 0.009999999776489688,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "2fd40278-ff9b-444c-a5c0-90d92c3a4a2e",
        "name": "PIR32",
        "levelIndex": 0,
        "position": {
            "x": 25.68586589554469,
            "z": -58.100950586776925,
            "elevation": 0.7100000021606618,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "b58e8332-9d40-4121-9085-76e8236ea215",
        "name": "PIR18",
        "levelIndex": 0,
        "position": {
            "x": 29.152463015440745,
            "z": -62.42643952423786,
            "elevation": 0.710000002160676,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "5dae32a0-f49f-4819-95db-d5d6018fca16",
        "name": "PIR36",
        "levelIndex": 0,
        "position": {
            "x": 29.15778550602827,
            "z": -59.99215485670487,
            "elevation": 0.009999999776489688,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "741a833f-240f-46ab-bb83-6ca887f91e4b",
        "name": "PIR23",
        "levelIndex": 0,
        "position": {
            "x": 28.708530179613966,
            "z": -58.22435288692885,
            "elevation": 0.7100000021606547,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "95bd2b95-8650-4200-a4b3-540ad4e86cc1",
        "name": "PIR24",
        "levelIndex": 0,
        "position": {
            "x": 33.318875294337715,
            "z": -59.870995988609174,
            "elevation": 0.009999999776475477,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "af343934-2826-40a3-9b07-5ff557055673",
        "name": "PIR27",
        "levelIndex": 0,
        "position": {
            "x": 33.300183283087364,
            "z": -57.876489412093235,
            "elevation": 0.46000000216066894,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "ccd907a4-4033-4050-a0c6-460f3fa27d9b",
        "name": "PIR2",
        "levelIndex": 0,
        "position": {
            "x": 33.039493398047554,
            "z": -61.883047074610595,
            "elevation": 0.009999999776475477,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "73975bc2-e0b4-40eb-a510-08de53d8062a",
        "name": "PIR15",
        "levelIndex": 0,
        "position": {
            "x": 34.5932154625499,
            "z": -54.97461176703617,
            "elevation": 0.009999999776489688,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "e95212c9-9550-4a6c-8be6-a60ae57e0b6d",
        "name": "PIR48",
        "levelIndex": 0,
        "position": {
            "x": 32.24711342414164,
            "z": -54.94094522168233,
            "elevation": 0.009999999776496793,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "8223ed87-71a6-4023-a09a-25d2ec37004c",
        "name": "PIR14",
        "levelIndex": 0,
        "position": {
            "x": 37.002062038070875,
            "z": -59.848518901965974,
            "elevation": 0.009999999776496793,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "3bb144c9-d233-41fe-89a4-2d9ad2042768",
        "name": "PIR22",
        "levelIndex": 0,
        "position": {
            "x": 37.078592790206855,
            "z": -53.51988893815568,
            "elevation": 0.009999999776489688,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "d4bfbe7f-86f6-46e5-ac70-bd9c77da5c97",
        "name": "PIR43",
        "levelIndex": 0,
        "position": {
            "x": 43.182753335469265,
            "z": -65.21612708679804,
            "elevation": 0.009999999776489688,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "e8517a23-5d96-4ae4-a7d8-0e6343259642",
        "name": "PIR33",
        "levelIndex": 0,
        "position": {
            "x": 39.339826792845585,
            "z": -62.38643032686123,
            "elevation": 0.42649306307882995,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "02c15f89-ecba-481c-9b3e-ab424c92dedb",
        "name": "PIR44",
        "levelIndex": 0,
        "position": {
            "x": 41.17770189997059,
            "z": -59.97593346566387,
            "elevation": 0.009999999776482582,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "f4328fb7-cddd-4292-b6ba-e97d8762bbd8",
        "name": "PIR40",
        "levelIndex": 0,
        "position": {
            "x": 43.412641807693944,
            "z": -60.28818961613589,
            "elevation": 0.009999999776482582,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "5ce0bb2d-798f-40a3-8fcb-3c9abf25198a",
        "name": "PIR78",
        "levelIndex": 0,
        "position": {
            "x": 44.43258243766127,
            "z": -60.48664582403702,
            "elevation": 0.009999999776489688,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "8c4f75e6-c49a-48fa-b03b-44c08760d08b",
        "name": "PIR41",
        "levelIndex": 0,
        "position": {
            "x": 45.53476217343537,
            "z": -60.41104903442625,
            "elevation": 0.009999999776482582,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "07b1bc80-d536-4341-b88e-76d66786a4a1",
        "name": "PIR35",
        "levelIndex": 0,
        "position": {
            "x": 46.0625802530342,
            "z": -65.34693540559691,
            "elevation": 0.009999999776489688,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "11a4befa-2380-4c7b-8f51-7882dc1057fd",
        "name": "PIR42",
        "levelIndex": 0,
        "position": {
            "x": 49.39659402028309,
            "z": -63.45016095213712,
            "elevation": 0.009999999776482582,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "60cc2b93-e1d4-4fc7-9a75-3b4a21c9d470",
        "name": "PIR74",
        "levelIndex": 0,
        "position": {
            "x": 40.49829717848877,
            "z": -56.606172675132115,
            "elevation": 0.009999999776489688,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "363b928e-a2ff-4652-831d-2d1af9b8ddbb",
        "name": "PIR76",
        "levelIndex": 0,
        "position": {
            "x": 42.771694067493186,
            "z": -55.132533974723714,
            "elevation": 0.009999999776475477,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "644c58e2-fc65-4469-95a2-34d1bf048049",
        "name": "PIR70",
        "levelIndex": 0,
        "position": {
            "x": 40.43385164123544,
            "z": -53.30275828980909,
            "elevation": 0.009999999776489688,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "bc799b1c-c0e7-4fc2-a5f1-0bcf72a1e40f",
        "name": "PIR71",
        "levelIndex": 0,
        "position": {
            "x": 40.401994146229995,
            "z": -51.479519588991835,
            "elevation": 0.009999999776496793,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "aa662308-84e1-4e14-84cd-cd50eaee6712",
        "name": "PIR52",
        "levelIndex": 0,
        "position": {
            "x": 41.813863894076476,
            "z": -50.01520867257054,
            "elevation": 0.009999999776511004,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "ea89ca0c-e75b-4494-a534-a8118a57a30a",
        "name": "PIR34",
        "levelIndex": 0,
        "position": {
            "x": 38.98875422602779,
            "z": -47.41912340792547,
            "elevation": 0.009999999776482582,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "45c0d4b1-ea14-402b-9a84-99fcc2b9e9a8",
        "name": "PIR77",
        "levelIndex": 0,
        "position": {
            "x": 41.91213541761187,
            "z": -48.16705217512633,
            "elevation": 0.7465800283104258,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "31b776fc-5a68-4134-88ac-a5258903caf3",
        "name": "PIR31",
        "levelIndex": 0,
        "position": {
            "x": 34.342171067616995,
            "z": -50.18817203480707,
            "elevation": 0.009999999776496793,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "d496dd0a-2a6e-48a5-ad48-253b58adf67e",
        "name": "PIR29",
        "levelIndex": 0,
        "position": {
            "x": 32.38888382399168,
            "z": -49.92777249240187,
            "elevation": 0.7100000021606689,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "a140b4e8-2fcd-403d-b147-4f99092f17db",
        "name": "PIR64",
        "levelIndex": 0,
        "position": {
            "x": 28.647850102314358,
            "z": -49.65846998125625,
            "elevation": 0.7100000021606689,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "bc73aa52-c525-48ed-86c6-6577eca43ba5",
        "name": "PIR61",
        "levelIndex": 0,
        "position": {
            "x": 24.648554855314547,
            "z": -49.48546804545008,
            "elevation": 0.009999999776482582,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "5a4e8b39-7549-4689-8550-2ae423f095e0",
        "name": "PIR65",
        "levelIndex": 0,
        "position": {
            "x": 20.86377450903896,
            "z": -49.54851369316982,
            "elevation": 0.009999999776482582,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "4018d4cb-b8f2-4367-9551-4925ab85074e",
        "name": "PIR59",
        "levelIndex": 0,
        "position": {
            "x": 17.508088158177927,
            "z": -49.50875295386943,
            "elevation": 0.009999999776489688,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "3c53bf44-b61a-4540-96ae-c97ad2dfa6e6",
        "name": "PIR28",
        "levelIndex": 0,
        "position": {
            "x": 32.08389375453996,
            "z": -47.34222911205407,
            "elevation": 0.009999999776482582,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "4ca59296-2619-4138-9483-e1cd6e467d04",
        "name": "PIR53",
        "levelIndex": 0,
        "position": {
            "x": 28.489387460920128,
            "z": -47.40232954294453,
            "elevation": 0.009999999776482582,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "42801400-953d-4a96-a9cb-eb7e5260ffcf",
        "name": "PIR58",
        "levelIndex": 0,
        "position": {
            "x": 24.696267555880567,
            "z": -47.610736425254515,
            "elevation": 0.6249999938160187,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "ec4278c4-f4ea-4fc6-96c7-b8354ded504a",
        "name": "PIR63",
        "levelIndex": 0,
        "position": {
            "x": 20.965902686006054,
            "z": -47.57621013863312,
            "elevation": 0.009999999776489688,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "98177875-d4e5-432c-b551-5217c83adcc4",
        "name": "PIR66",
        "levelIndex": 0,
        "position": {
            "x": 17.420402328886336,
            "z": -47.68357764908718,
            "elevation": 0.009999999776489688,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "6126a4e8-bd75-4259-87c7-1a0488750949",
        "name": "PIR55",
        "levelIndex": 0,
        "position": {
            "x": 32.00027071510609,
            "z": -45.46754276971626,
            "elevation": 0.009999999776489688,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "9e3aa1e7-3fd8-4fad-bb51-8948f5e75550",
        "name": "PIR30",
        "levelIndex": 0,
        "position": {
            "x": 28.35465552547189,
            "z": -45.43225260083575,
            "elevation": 0.009999999776482582,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "85ae5c0b-8492-4c96-a3f6-e2b40d927eb9",
        "name": "PIR60",
        "levelIndex": 0,
        "position": {
            "x": 24.420251853920536,
            "z": -45.35366189630058,
            "elevation": 0.009999999776503898,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "bdb9138b-8877-4ec0-b0ea-9c6bd01c7753",
        "name": "PIR54",
        "levelIndex": 0,
        "position": {
            "x": 20.8722606904045,
            "z": -45.41298459051867,
            "elevation": 0.009999999776482582,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "2dbe8d34-4d7e-4104-8c7d-74724e941b1e",
        "name": "PIR56",
        "levelIndex": 0,
        "position": {
            "x": 17.18463075020289,
            "z": -45.66713931036351,
            "elevation": 0.009999999776489688,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "52e02c88-c807-484d-a095-d640df4dbe3b",
        "name": "PIR47",
        "levelIndex": 0,
        "position": {
            "x": 38.79289511234141,
            "z": -44.48763786312898,
            "elevation": 0.009999999776503898,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "3bf41116-9ac9-4e6f-bbf5-00989b803370",
        "name": "PIR81",
        "levelIndex": 0,
        "position": {
            "x": 42.702655549899234,
            "z": -44.60088678297578,
            "elevation": 0.760000014081605,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "6e19346d-f173-4637-9951-4aa2e567e3f5",
        "name": "PIR62",
        "levelIndex": 0,
        "position": {
            "x": 39.45802653074409,
            "z": -39.371004383957754,
            "elevation": 0.009999999776482582,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "9c732457-080a-4e57-b5ba-29b380d7e2da",
        "name": "PIR57",
        "levelIndex": 0,
        "position": {
            "x": 44.222865545656425,
            "z": -39.060569788438045,
            "elevation": 0.009999999776482582,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "92fd089f-b4cb-4801-b90b-1a93bc2ddb55",
        "name": "PIR80",
        "levelIndex": 0,
        "position": {
            "x": 49.7362275973021,
            "z": -58.49257355832186,
            "elevation": 1.001794163343689,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "9077c913-7547-4e4c-8ad7-070fdf6ff8d3",
        "name": "PIR82",
        "levelIndex": 0,
        "position": {
            "x": 50.498783838363224,
            "z": -56.161116210933834,
            "elevation": 0.49000000953675027,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "e03a89e7-de86-4c0d-b5f4-5aad4f138de9",
        "name": "PIR38",
        "levelIndex": 0,
        "position": {
            "x": 51.38316136354434,
            "z": -55.657559519507,
            "elevation": 1.114999994039536,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "59936eef-f947-4e54-8fef-aa4426231bc1",
        "name": "PIR79",
        "levelIndex": 0,
        "position": {
            "x": 53.35807160752593,
            "z": -54.233359343300016,
            "elevation": 1.2500000143051082,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "57fc823c-e819-4708-af71-64678ff8b9cb",
        "name": "PIR39",
        "levelIndex": 0,
        "position": {
            "x": 55.7079336562001,
            "z": -53.40465417930351,
            "elevation": 1.243259980678566,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "d84ba608-162c-4bcf-be70-7a5d505f08a6",
        "name": "PIR19",
        "levelIndex": 0,
        "position": {
            "x": 55.717388389740236,
            "z": -52.53962744865273,
            "elevation": 0.4900000095367716,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "173e87b3-2b77-4d85-8afa-99c4a28bbbf3",
        "name": "PIR50",
        "levelIndex": 0,
        "position": {
            "x": 58.01793521816949,
            "z": -52.5238166825964,
            "elevation": 0.4900000095367645,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "fb724379-e599-436e-9202-274c9ab63ace",
        "name": "PIR49",
        "levelIndex": 0,
        "position": {
            "x": 55.98915246287714,
            "z": -50.36534497953661,
            "elevation": 0.49000000953674316,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "5461c2b8-91eb-4919-96fe-78dc2016e676",
        "name": "PIR45",
        "levelIndex": 0,
        "position": {
            "x": 56.32582739010188,
            "z": -47.81350695316973,
            "elevation": 2.333991137494877,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "4b7048e7-7339-46ed-a845-2ea941e13c8e",
        "name": "PIR46",
        "levelIndex": 0,
        "position": {
            "x": 58.522526493194626,
            "z": -51.06763430826412,
            "elevation": 1.869167909365757,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "254d202b-ae29-4c8d-a287-b0f35d89e315",
        "name": "PIR51",
        "levelIndex": 0,
        "position": {
            "x": 42.824492166436485,
            "z": -37.895010290823556,
            "elevation": 1.404371426107673,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "41ffa34a-a21c-4c4e-8253-a0f543fec2e5",
        "name": "PIR67",
        "levelIndex": 0,
        "position": {
            "x": 50.50202750912248,
            "z": -35.24464526897396,
            "elevation": 0.9395306463399038,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "946caf10-7471-4258-9044-576f908f23f7",
        "name": "PIR68",
        "levelIndex": 0,
        "position": {
            "x": 52.38011924271759,
            "z": -34.297907949991654,
            "elevation": 0.47467186472005096,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "a637c8fd-a7e3-412e-8bb4-2817b81f8fe3",
        "name": "PIR72",
        "levelIndex": 0,
        "position": {
            "x": 55.298555478715826,
            "z": -34.10350681783168,
            "elevation": 0.009999999776482582,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "65497920-381b-41cc-9f46-018d8f77b5bb",
        "name": "PIR55",
        "levelIndex": 0,
        "position": {
            "x": 52.99173456539869,
            "z": -32.003418611846286,
            "elevation": 0.00999999977653232,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "393e69f2-33a8-47ee-9df8-306f0a84a6f7",
        "name": "PIR75",
        "levelIndex": 0,
        "position": {
            "x": 53.922942750843866,
            "z": -31.349911653402366,
            "elevation": 0.009999999776496793,
            "levelIndex": 0
        },
        "layerType": "point"
    },
    {
        "id": "6f7b8fc0-ad19-4022-89f3-65b28dc544b2",
        "name": "PIR73",
        "levelIndex": 0,
        "position": {
            "x": 55.126292670205444,
            "z": -30.67177187939212,
            "elevation": 0.009999999776482582,
            "levelIndex": 0
        },
        "layerType": "point"
    }
]
