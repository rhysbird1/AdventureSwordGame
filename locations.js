var area = {};

var locAdj = ["Decrepit", "Old", "Sunken", "Red", "Black", "Blue", "Light", "Dark",
              "Ominous", "Desolate", "Desecrated", "Empty", "Barren", "Flooded", "Burning",
              "Bleak", "Forgotten", "Dilapidated", "Derelict", "Ancient", "Corrupt", "Ice",
              "Frozen", "Unknown", "Silent", "Crystal", "Emerald", "Ethereal", "Twisted", 
              "Warped", "Great", "Fallen", "Infested", "Abandoned", "Verdant", "Lost", 
              "Wailing", "Weeping", "Lifeless", "Shadow", "Chaos", "Stone", "Obsidian", 
              "Infernal", "Ash", "Golden", "Deserted", "Undead", "Sinner's", "Iron", "Shaded",
              "Run-Down", ];

var locNoun = ["Valley", "Fortress", "Castle", "Temple", "Road", "Bridge", "City", "Town",
               "Village", "Isle", "Grave", "Shrine", "Dungeon", "Cavern", "Cave", "Abyss", 
               "Underworld", "Wasteland", "Forest", "Grasslands", "Waterfall", "Lake", 
               "River", "Coast", "Plateau", "Mountain", "Palace", "Peninsula", "Pagoda", 
               "Mine", "Fissure", "Crevasse", "Tomb", "Church", "Hall", "Prairie", "Fields",
               "Wall", "Tower", "Bell Tower", "Belvedere", "Camp", "Encampment", "Gate",
               "Asylum", "Parish", "Depths", "Garden", "Ruins", "Woods", "Burg", "Cathedral",
               "Wharf", "Peak", "Keep", "Crypt", "Sanctum", "Catacombs", "Cemetary", "Archives",
               "Library", "Kiln", "Swamp"];

var area = ["Fyrevale", "Gurok", "Perillith", "Ard", "Newshire", "Gondol Meadows", "Prrwylth",
            "Zenpou", "Said Unithe", "Erreusgio", "Karr'll", "Tsuksia"]

var currentLocAdj = locAdj[Math.floor(Math.random() * locAdj.length)];
var currentLocNoun = locNoun[Math.floor(Math.random() * locNoun.length)];

area.fyreVale =   { name:        "FyreVale", 
                    totalStages:  50,
                    currentStage: 1,
                    active:       true,
                    complete:     false
                  }

area.gurok =      { name:        "Gurok", 
                    totalStages:  75,
                    currentStage: 1,
                    active:       false,
                    complete:     false
                  }

area.perillith =  { name:        "Perillith", 
                    totalStages:  100,
                    currentStage: 1,
                    active:       false,
                    complete:     false
                  }

area.ard =        { name:        "Ard", 
                    totalStages:  125,
                    currentStage: 1,
                    active:       false,
                    complete:     false
                  }

area.newshire =   { name:        "Newshire", 
                    totalStages:  150,
                    currentStage: 1,
                    active:       false,
                    complete:     false
                  }

area.gondol =     { name:        "Gondol Meadows", 
                    totalStages:  175,
                    currentStage: 1,
                    active:       false,
                    complete:     false
                  }

area.prrwylth =   { name:        "Prrwylth", 
                    totalStages:  200,
                    currentStage: 1,
                    active:       false,
                    complete:     false
                  }

area.zenpou =     { name:        "Zenpou", 
                    totalStages:  225,
                    currentStage: 1,
                    active:       false,
                    complete:     false
                  }

area.saidUnithe =   { name:       "Said Unithe", 
                    totalStages:  250,
                    currentStage: 1,
                    active:       false,
                    complete:     false
                  }

area.errusgio =   { name:        "Errusgio", 
                    totalStages:  275,
                    currentStage: 1,
                    active:       false,
                    complete:     false
                  }

area.karrll =     { name:        "Karr'll", 
                    totalStages:  300,
                    currentStage: 1,
                    active:       false,
                    complete:     false
                  }

area.Tsuksia =    { name:        "Tsuksia", 
                    totalStages:  350,
                    currentStage: 1,
                    active:       false,
                    complete:     false
                  }
