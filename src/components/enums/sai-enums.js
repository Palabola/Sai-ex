export class SaiEnums {
  constructor() {
    this.SMART_EVENT_PHASE = {
      SMART_EVENT_PHASE_ALWAYS: 0,
      SMART_EVENT_PHASE_1: 1,
      SMART_EVENT_PHASE_2: 2,
      SMART_EVENT_PHASE_3: 3,
      SMART_EVENT_PHASE_4: 4,
      SMART_EVENT_PHASE_5: 5,
      SMART_EVENT_PHASE_6: 6,
      SMART_EVENT_PHASE_7: 7,
      SMART_EVENT_PHASE_8: 8,
      SMART_EVENT_PHASE_9: 9,
      SMART_EVENT_PHASE_MAX: 10
    };

    this.SMART_EVENT = {
      SMART_EVENT_UPDATE_IC: 0, // InitialMin, InitialMax, RepeatMin, RepeatMax
      SMART_EVENT_UPDATE_OOC: 1, // InitialMin, InitialMax, RepeatMin, RepeatMax
      SMART_EVENT_HEALT_PCT: 2, // HPMin%, HPMax%,  RepeatMin, RepeatMax
      SMART_EVENT_MANA_PCT: 3, // ManaMin%, ManaMax%, RepeatMin, RepeatMax
      SMART_EVENT_AGGRO: 4, // NONE
      SMART_EVENT_KILL: 5, // CooldownMin0, CooldownMax1, playerOnly2, else creature entry3
      SMART_EVENT_DEATH: 6, // NONE
      SMART_EVENT_EVADE: 7, // NONE
      SMART_EVENT_SPELLHIT: 8, // SpellID, School, CooldownMin, CooldownMax
      SMART_EVENT_RANGE: 9, // MinDist, MaxDist, RepeatMin, RepeatMax
      SMART_EVENT_OOC_LOS: 10, // NoHostile, MaxRnage, CooldownMin, CooldownMax
      SMART_EVENT_RESPAWN: 11, // type, MapId, ZoneId
      SMART_EVENT_TARGET_HEALTH_PCT: 12, // HPMin%, HPMax%, RepeatMin, RepeatMax
      SMART_EVENT_VICTIM_CASTING: 13, // RepeatMin, RepeatMax, spellid
      SMART_EVENT_FRIENDLY_HEALTH: 14, // HPDeficit, Radius, RepeatMin, RepeatMax
      SMART_EVENT_FRIENDLY_IS_CC: 15, // Radius, RepeatMin, RepeatMax
      SMART_EVENT_FRIENDLY_MISSING_BUFF: 16, // SpellId, Radius, RepeatMin, RepeatMax
      SMART_EVENT_SUMMONED_UNIT: 17, // CreatureId(0 all), CooldownMin, CooldownMax
      SMART_EVENT_TARGET_MANA_PCT: 18, // ManaMin%, ManaMax%, RepeatMin, RepeatMax
      SMART_EVENT_ACCEPTED_QUEST: 19, // QuestID(0any)
      SMART_EVENT_REWARD_QUEST: 20, // QuestID(0any)
      SMART_EVENT_REACHED_HOME: 21, // NONE
      SMART_EVENT_RECEIVE_EMOTE: 22, // EmoteId, CooldownMin, CooldownMax, condition, val1, val2, val3
      SMART_EVENT_HAS_AURA: 23, // Param1 = SpellID, Param2 = Stack amount, Param3/4 RepeatMin, RepeatMax
      SMART_EVENT_TARGET_BUFFED: 24, // Param1 = SpellID, Param2 = Stack amount, Param3/4 RepeatMin, RepeatMax
      SMART_EVENT_RESET: 25, // Called after combat, when the creature respawn and spawn.
      SMART_EVENT_IC_LOS: 26, // NoHostile, MaxRnage, CooldownMin, CooldownMax
      SMART_EVENT_PASSENGER_BOARDED: 27, // CooldownMin, CooldownMax
      SMART_EVENT_PASSENGER_REMOVED: 28, // CooldownMin, CooldownMax
      SMART_EVENT_CHARMED: 29, // onRemove (0 - on apply, 1 - on remove)
      SMART_EVENT_CHARMED_TARGET: 30, // NONE
      SMART_EVENT_SPELLHIT_TARGET: 31, // SpellID, School, CooldownMin, CooldownMax
      SMART_EVENT_DAMAGED: 32, // MinDmg, MaxDmg, CooldownMin, CooldownMax
      SMART_EVENT_DAMAGED_TARGET: 33, // MinDmg, MaxDmg, CooldownMin, CooldownMax
      SMART_EVENT_MOVEMENTINFORM: 34, // MovementType(any), PointID
      SMART_EVENT_SUMMON_DESPAWNED: 35, // Entry, CooldownMin, CooldownMax
      SMART_EVENT_CORPSE_REMOVED: 36, // NONE
      SMART_EVENT_AI_INIT: 37, // NONE
      SMART_EVENT_DATA_SET: 38, // Id, Value, CooldownMin, CooldownMax
      SMART_EVENT_WAYPOINT_START: 39, // PointId(0any), pathID(0any)
      SMART_EVENT_WAYPOINT_REACHED: 40, // PointId(0any), pathID(0any)
      SMART_EVENT_TRANSPORT_ADDPLAYER: 41, // NONE
      SMART_EVENT_TRANSPORT_ADDCREATURE: 42, // Entry (0 any)
      SMART_EVENT_TRANSPORT_REMOVE_PLAYER: 43, // NONE
      SMART_EVENT_TRANSPORT_RELOCATE: 44, // PointId
      SMART_EVENT_INSTANCE_PLAYER_ENTER: 45, // Team (0 any), CooldownMin, CooldownMax
      SMART_EVENT_AREATRIGGER_ONTRIGGER: 46, // TriggerId(0 any)
      SMART_EVENT_QUEST_ACCEPTED: 47, // none
      SMART_EVENT_QUEST_OBJ_COPLETETION: 48, // none
      SMART_EVENT_QUEST_COMPLETION: 49, // none
      SMART_EVENT_QUEST_REWARDED: 50, // none
      SMART_EVENT_QUEST_FAIL: 51, // none
      SMART_EVENT_TEXT_OVER: 52, // GroupId from creature_text,  creature entry who talks (0 any)
      SMART_EVENT_RECEIVE_HEAL: 53, // MinHeal, MaxHeal, CooldownMin, CooldownMax
      SMART_EVENT_JUST_SUMMONED: 54, // none
      SMART_EVENT_WAYPOINT_PAUSED: 55, // PointId(0any), pathID(0any)
      SMART_EVENT_WAYPOINT_RESUMED: 56, // PointId(0any), pathID(0any)
      SMART_EVENT_WAYPOINT_STOPPED: 57, // PointId(0any), pathID(0any)
      SMART_EVENT_WAYPOINT_ENDED: 58, // PointId(0any), pathID(0any)
      SMART_EVENT_TIMED_EVENT_TRIGGERED: 59, // id
      SMART_EVENT_UPDATE: 60, // InitialMin, InitialMax, RepeatMin, RepeatMax
      SMART_EVENT_LINK: 61, // INTERNAL USAGE, no params, used to link together multiple events, does not use any extra resources to iterate event lists needlessly
      SMART_EVENT_GOSSIP_SELECT: 62, // menuID, actionID
      SMART_EVENT_JUST_CREATED: 63, // none
      SMART_EVENT_GOSSIP_HELLO: 64, // none
      SMART_EVENT_FOLLOW_COMPLETED: 65, // none
      SMART_EVENT_DUMMY_EFFECT: 66, // spellId, effectIndex
      SMART_EVENT_IS_BEHIND_TARGET: 67, // cooldownMin, CooldownMax
      SMART_EVENT_GAME_EVENT_START: 68, // game_event.Entry
      SMART_EVENT_GAME_EVENT_END: 69, // game_event.Entry
      SMART_EVENT_GO_STATE_CHANGED: 70, // go state
      SMART_EVENT_GO_EVENT_INFORM: 71, // eventId
      SMART_EVENT_ACTION_DONE: 72, // eventId (SharedDefines.EventId)
      SMART_EVENT_ON_SPELLCLICK: 73, // clicker (unit)
      SMART_EVENT_FRIENDLY_HEALTH_PCT: 74, // minHpPct, maxHpPct, repeatMin, repeatMax
      SMART_EVENT_DISTANCE_CREATURE: 75, // guid, entry, distance, repeat
      SMART_EVENT_DISTANCE_GAMEOBJECT: 76, // guid, entry, distance, repeat
      SMART_EVENT_COUNTER_SET: 77, // id, value, cooldownMin, cooldownMax
      SMART_EVENT_SCENE_START: 78, // none
      SMART_EVENT_SCENE_TRIGGER: 79, // param_string : triggerName
      SMART_EVENT_SCENE_CANCEL: 80, // none
      SMART_EVENT_SCENE_COMPLETE: 81, // none

      SMART_EVENT_END: 82
    };

    this.SMART_ACTION = {
      SMART_ACTION_NONE: 0, // No action
      SMART_ACTION_TALK: 1, // groupID from creature_text, duration to wait before TEXT_OVER event is triggered, useTalkTarget (0/1) - use target as talk target
      SMART_ACTION_SET_FACTION: 2, // FactionId (or 0 for default)
      SMART_ACTION_MORPH_TO_ENTRY_OR_MODEL: 3, // Creature_template entry(param1) OR ModelId (param2) (or 0 for both to demorph)
      SMART_ACTION_SOUND: 4, // SoundId, onlySelf
      SMART_ACTION_PLAY_EMOTE: 5, // EmoteId
      SMART_ACTION_FAIL_QUEST: 6, // QuestID
      SMART_ACTION_OFFER_QUEST: 7, // QuestID, directAdd
      SMART_ACTION_SET_REACT_STATE: 8, // state
      SMART_ACTION_ACTIVATE_GOBJECT: 9, //
      SMART_ACTION_RANDOM_EMOTE: 10, // EmoteId1, EmoteId2, EmoteId3...
      SMART_ACTION_CAST: 11, // SpellId, CastFlags, TriggeredFlags
      SMART_ACTION_SUMMON_CREATURE: 12, // CreatureID, summonType, duration in ms, attackInvoker
      SMART_ACTION_THREAT_SINGLE_PCT: 13, // Threat%
      SMART_ACTION_THREAT_ALL_PCT: 14, // Threat%
      SMART_ACTION_CALL_AREAEXPLOREDOREVENTHAPPENS: 15, // QuestID
      SMART_ACTION_SET_INGAME_PHASE_GROUP: 16, // phaseGroupId, apply
      SMART_ACTION_SET_EMOTE_STATE: 17, // emoteID
      SMART_ACTION_SET_UNIT_FLAG: 18, // Flags (may be more than one field OR'd together), Target
      SMART_ACTION_REMOVE_UNIT_FLAG: 19, // Flags (may be more than one field OR'd together), Target
      SMART_ACTION_AUTO_ATTACK: 20, // AllowAttackState (0 = stop attack, anything else means continue attacking)
      SMART_ACTION_ALLOW_COMBAT_MOVEMENT: 21, // AllowCombatMovement (0 = stop combat based movement, anything else continue attacking)
      SMART_ACTION_SET_EVENT_PHASE: 22, // Phase
      SMART_ACTION_INC_EVENT_PHASE: 23, // Value (may be negative to decrement phase, should not be 0)
      SMART_ACTION_EVADE: 24, // No Params
      SMART_ACTION_FLEE_FOR_ASSIST: 25, // With Emote
      SMART_ACTION_CALL_GROUPEVENTHAPPENS: 26, // QuestID
      SMART_ACTION_COMBAT_STOP: 27, //
      SMART_ACTION_REMOVEAURASFROMSPELL: 28, // Spellid (0 removes all auras), charges (0 removes aura)
      SMART_ACTION_FOLLOW: 29, // Distance (0 = default), Angle (0 = default), EndCreatureEntry, credit, creditType (0monsterkill, 1event)
      SMART_ACTION_RANDOM_PHASE: 30, // PhaseId1, PhaseId2, PhaseId3...
      SMART_ACTION_RANDOM_PHASE_RANGE: 31, // PhaseMin, PhaseMax
      SMART_ACTION_RESET_GOBJECT: 32, //
      SMART_ACTION_CALL_KILLEDMONSTER: 33, // CreatureId,
      SMART_ACTION_SET_INST_DATA: 34, // Field, Data, Type (0 = SetData, 1 = SetBossState)
      SMART_ACTION_SET_INST_DATA64: 35, // Field,
      SMART_ACTION_UPDATE_TEMPLATE: 36, // Entry
      SMART_ACTION_DIE: 37, // No Params
      SMART_ACTION_SET_IN_COMBAT_WITH_ZONE: 38, // No Params
      SMART_ACTION_CALL_FOR_HELP: 39, // Radius, With Emote
      SMART_ACTION_SET_SHEATH: 40, // Sheath (0-unarmed, 1-melee, 2-ranged)
      SMART_ACTION_FORCE_DESPAWN: 41, // timer
      SMART_ACTION_SET_INVINCIBILITY_HP_LEVEL: 42, // MinHpValue(+pct, -flat)
      SMART_ACTION_MOUNT_TO_ENTRY_OR_MODEL: 43, // Creature_template entry(param1) OR ModelId (param2) (or 0 for both to dismount)
      SMART_ACTION_SET_INGAME_PHASE_ID: 44, // PhaseId, apply
      SMART_ACTION_SET_DATA: 45, // Field, Data (only creature @todo)
      SMART_ACTION_SET_VISIBILITY: 47, // on/off
      SMART_ACTION_SET_ACTIVE: 48, // on/off
      SMART_ACTION_ATTACK_START: 49, //
      SMART_ACTION_SUMMON_GO: 50, // GameObjectID, DespawnTime in s
      SMART_ACTION_KILL_UNIT: 51, //
      SMART_ACTION_ACTIVATE_TAXI: 52, // TaxiID
      SMART_ACTION_WP_START: 53, // run/walk, pathID, canRepeat, quest, despawntime, reactState
      SMART_ACTION_WP_PAUSE: 54, // time
      SMART_ACTION_WP_STOP: 55, // despawnTime, quest, fail?
      SMART_ACTION_ADD_ITEM: 56, // itemID, count
      SMART_ACTION_REMOVE_ITEM: 57, // itemID, count
      SMART_ACTION_INSTALL_AI_TEMPLATE: 58, // AITemplateID
      SMART_ACTION_SET_RUN: 59, // 0/1
      SMART_ACTION_SET_FLY: 60, // 0/1
      SMART_ACTION_SET_SWIM: 61, // 0/1
      SMART_ACTION_TELEPORT: 62, // mapID,
      SMART_ACTION_SET_COUNTER: 63, // id, value, reset (0/1)
      SMART_ACTION_STORE_TARGET_LIST: 64, // varID,
      SMART_ACTION_WP_RESUME: 65, // none
      SMART_ACTION_SET_ORIENTATION: 66, //
      SMART_ACTION_CREATE_TIMED_EVENT: 67, // id, InitialMin, InitialMax, RepeatMin(only if it repeats), RepeatMax(only if it repeats), chance
      SMART_ACTION_PLAYMOVIE: 68, // entry
      SMART_ACTION_MOVE_TO_POS: 69, // PointId, transport, disablePathfinding
      SMART_ACTION_RESPAWN_TARGET: 70, //
      SMART_ACTION_EQUIP: 71, // entry, slotmask slot1, slot2, slot3   , only slots with mask set will be sent to client, bits are 1, 2, 4, leaving mask 0 is defaulted to mask 7 (send all), slots1-3 are only used if no entry is set
      SMART_ACTION_CLOSE_GOSSIP: 72, // none
      SMART_ACTION_TRIGGER_TIMED_EVENT: 73, // id(>1)
      SMART_ACTION_REMOVE_TIMED_EVENT: 74, // id(>1)
      SMART_ACTION_ADD_AURA: 75, // spellid,  targets
      SMART_ACTION_OVERRIDE_SCRIPT_BASE_OBJECT: 76, // WARNING: CAN CRASH CORE, do not use if you dont know what you are doing
      SMART_ACTION_RESET_SCRIPT_BASE_OBJECT: 77, // none
      SMART_ACTION_CALL_SCRIPT_RESET: 78, // none
      SMART_ACTION_SET_RANGED_MOVEMENT: 79, // Distance, angle
      SMART_ACTION_CALL_TIMED_ACTIONLIST: 80, // ID (overwrites already running actionlist), stop after combat?(0/1), timer update type(0-OOC, 1-IC, 2-ALWAYS)
      SMART_ACTION_SET_NPC_FLAG: 81, // Flags
      SMART_ACTION_ADD_NPC_FLAG: 82, // Flags
      SMART_ACTION_REMOVE_NPC_FLAG: 83, // Flags
      SMART_ACTION_SIMPLE_TALK: 84, // groupID, can be used to make players say groupID, Text_over event is not triggered, whisper can not be used (Target units will say the text)
      SMART_ACTION_INVOKER_CAST: 85, // spellID, castFlags,   if avaliable, last used invoker will cast spellId with castFlags on targets
      SMART_ACTION_CROSS_CAST: 86, // spellID, castFlags, CasterTargetType, CasterTarget param1, CasterTarget param2, CasterTarget param3, ( + the origonal target fields as Destination target),   CasterTargets will cast spellID on all Targets (use with caution if targeting multiple * multiple units)
      SMART_ACTION_CALL_RANDOM_TIMED_ACTIONLIST: 87, // script9 ids 1-9
      SMART_ACTION_CALL_RANDOM_RANGE_TIMED_ACTIONLIST: 88, // script9 id min, max
      SMART_ACTION_RANDOM_MOVE: 89, // maxDist
      SMART_ACTION_SET_UNIT_FIELD_BYTES_1: 90, // bytes, target
      SMART_ACTION_REMOVE_UNIT_FIELD_BYTES_1: 91, // bytes, target
      SMART_ACTION_INTERRUPT_SPELL: 92,
      SMART_ACTION_SEND_GO_CUSTOM_ANIM: 93, // anim id
      SMART_ACTION_SET_DYNAMIC_FLAG: 94, // Flags
      SMART_ACTION_ADD_DYNAMIC_FLAG: 95, // Flags
      SMART_ACTION_REMOVE_DYNAMIC_FLAG: 96, // Flags
      SMART_ACTION_JUMP_TO_POS: 97, // speedXY, speedZ, targetX, targetY, targetZ
      SMART_ACTION_SEND_GOSSIP_MENU: 98, // menuId, optionIndex
      SMART_ACTION_GO_SET_LOOT_STATE: 99, // state
      SMART_ACTION_SEND_TARGET_TO_TARGET: 100, // id
      SMART_ACTION_SET_HOME_POS: 101, // none
      SMART_ACTION_SET_HEALTH_REGEN: 102, // 0/1
      SMART_ACTION_SET_ROOT: 103, // off/on
      SMART_ACTION_SET_GO_FLAG: 104, // Flags
      SMART_ACTION_ADD_GO_FLAG: 105, // Flags
      SMART_ACTION_REMOVE_GO_FLAG: 106, // Flags
      SMART_ACTION_SUMMON_CREATURE_GROUP: 107, // Group, attackInvoker
      SMART_ACTION_SET_POWER: 108, // PowerType, newPower
      SMART_ACTION_ADD_POWER: 109, // PowerType, newPower
      SMART_ACTION_REMOVE_POWER: 110, // PowerType, newPower
      SMART_ACTION_GAME_EVENT_STOP: 111, // GameEventId
      SMART_ACTION_GAME_EVENT_START: 112, // GameEventId
      // Not used                                     : 113,
      SMART_ACTION_MOVE_OFFSET: 114,
      SMART_ACTION_RANDOM_SOUND: 115, // soundId1, soundId2, soundId3, soundId4, soundId5, onlySelf
      SMART_ACTION_SET_CORPSE_DELAY: 116, // timer
      SMART_ACTION_DISABLE_EVADE: 117, // 0/1 (1 = disabled, 0 = enabled)
      SMART_ACTION_GO_SET_GO_STATE: 118, // state
      // 119 - 127 : 3.3.5 reserved
      SMART_ACTION_PLAY_ANIMKIT: 128, // id, type (0 = oneShot, 1 = aiAnim, 2 = meleeAnim, 3 = movementAnim)
      SMART_ACTION_SCENE_PLAY: 129, // sceneId
      SMART_ACTION_SCENE_CANCEL: 130, // sceneId

      SMART_ACTION_END: 131
    };

    this.SMARTAI_TARGETS = {
      SMART_TARGET_NONE: 0, // NONE, defaulting to invoket
      SMART_TARGET_SELF: 1, // Self cast
      SMART_TARGET_VICTIM: 2, // Our current target (ie: highest aggro)
      SMART_TARGET_HOSTILE_SECOND_AGGRO: 3, // Second highest aggro
      SMART_TARGET_HOSTILE_LAST_AGGRO: 4, // Dead last on aggro
      SMART_TARGET_HOSTILE_RANDOM: 5, // Just any random target on our threat list
      SMART_TARGET_HOSTILE_RANDOM_NOT_TOP: 6, // Any random target except top threat
      SMART_TARGET_ACTION_INVOKER: 7, // Unit who caused this Event to occur
      SMART_TARGET_POSITION: 8, // use xyz from event params
      SMART_TARGET_CREATURE_RANGE: 9, // CreatureEntry(0any), minDist, maxDist
      SMART_TARGET_CREATURE_GUID: 10, // guid, entry
      SMART_TARGET_CREATURE_DISTANCE: 11, // CreatureEntry(0any), maxDist
      SMART_TARGET_STORED: 12, // id, uses pre-stored target(list)
      SMART_TARGET_GAMEOBJECT_RANGE: 13, // entry(0any), min, max
      SMART_TARGET_GAMEOBJECT_GUID: 14, // guid, entry
      SMART_TARGET_GAMEOBJECT_DISTANCE: 15, // entry(0any), maxDist
      SMART_TARGET_INVOKER_PARTY: 16, // invoker's party members
      SMART_TARGET_PLAYER_RANGE: 17, // min, max
      SMART_TARGET_PLAYER_DISTANCE: 18, // maxDist
      SMART_TARGET_CLOSEST_CREATURE: 19, // CreatureEntry(0any), maxDist, dead?
      SMART_TARGET_CLOSEST_GAMEOBJECT: 20, // entry(0any), maxDist
      SMART_TARGET_CLOSEST_PLAYER: 21, // maxDist
      SMART_TARGET_ACTION_INVOKER_VEHICLE: 22, // Unit's vehicle who caused this Event to occur
      SMART_TARGET_OWNER_OR_SUMMONER: 23, // Unit's owner or summoner
      SMART_TARGET_THREAT_LIST: 24, // All units on creature's threat list
      SMART_TARGET_CLOSEST_ENEMY: 25, // maxDist, playerOnly
      SMART_TARGET_CLOSEST_FRIENDLY: 26, // maxDist, playerOnly
      SMART_TARGET_LOOT_RECIPIENTS: 27, // all players that have tagged this creature (for kill credit)
      SMART_TARGET_FARTHEST: 28, // maxDist, playerOnly, isInLos
      SMART_TARGET_VEHICLE_ACCESSORY: 29, // seat number (vehicle can target it's own accessory)

      SMART_TARGET_END: 30
    };
    // Copy above new Enums!

    this.saiLabels = [];
    this.saiLabels.action_type = [];
    this.saiLabels.event_type = [];
    this.saiLabels.target_type = [];

    this.saiLabels.action_type.name = [];
    this.saiLabels.event_type.name = [];
    this.saiLabels.target_type.name = [];

    this.saiLabels.action_type.tooltip = [];
    this.saiLabels.event_type.tooltip = [];
    this.saiLabels.target_type.tooltip = [];

    this.saiLabels.action_type.param1 = [];
    this.saiLabels.action_type.param2 = [];
    this.saiLabels.action_type.param3 = [];
    this.saiLabels.action_type.param4 = [];
    this.saiLabels.action_type.param5 = [];
    this.saiLabels.action_type.param6 = [];

    this.saiLabels.event_type.param1 = [];
    this.saiLabels.event_type.param2 = [];
    this.saiLabels.event_type.param3 = [];
    this.saiLabels.event_type.param4 = [];

    this.saiLabels.target_type.param1 = [];
    this.saiLabels.target_type.param2 = [];
    this.saiLabels.target_type.param3 = [];

    this.saiLabels.action_type.paramTooltip1 = [];
    this.saiLabels.action_type.paramTooltip2 = [];
    this.saiLabels.action_type.paramTooltip3 = [];
    this.saiLabels.action_type.paramTooltip4 = [];
    this.saiLabels.action_type.paramTooltip5 = [];
    this.saiLabels.action_type.paramTooltip6 = [];

    this.saiLabels.action_type.flagger1 = [];
    this.saiLabels.action_type.flagger2 = [];
    this.saiLabels.action_type.flagger3 = [];
    this.saiLabels.action_type.flagger4 = [];
    this.saiLabels.action_type.flagger5 = [];
    this.saiLabels.action_type.flagger6 = [];

    this.saiLabels.event_type.paramTooltip1 = [];
    this.saiLabels.event_type.paramTooltip2 = [];
    this.saiLabels.event_type.paramTooltip3 = [];
    this.saiLabels.event_type.paramTooltip4 = [];

    this.saiLabels.target_type.paramTooltip1 = [];
    this.saiLabels.target_type.paramTooltip2 = [];
    this.saiLabels.target_type.paramTooltip3 = [];

    this.saiLabels.comment = [];
    this.saiLabels.comment.action = [];
    this.saiLabels.comment.event = [];
    this.saiLabels.comment.target = [];

    /* ACTION NAMES */
    this.saiLabels.action_type.name[0] = "NONE";
    this.saiLabels.action_type.name[1] = "TALK";
    this.saiLabels.action_type.name[2] = "SET_FACTION";
    this.saiLabels.action_type.name[3] = "MORPH_TO_ENTRY_OR_MODEL";
    this.saiLabels.action_type.name[4] = "SOUND";
    this.saiLabels.action_type.name[5] = "PLAY_EMOTE";
    this.saiLabels.action_type.name[6] = "FAIL_QUEST";
    this.saiLabels.action_type.name[7] = "ADD_QUEST";
    this.saiLabels.action_type.name[8] = "SET_REACT_STATE";
    this.saiLabels.action_type.name[9] = "ACTIVATE_GOBJECT";
    this.saiLabels.action_type.name[10] = "RANDOM_EMOTE";
    this.saiLabels.action_type.name[11] = "CAST";
    this.saiLabels.action_type.name[12] = "SUMMON_CREATURE";
    this.saiLabels.action_type.name[13] = "THREAT_SINGLE_%";
    this.saiLabels.action_type.name[14] = "THREAT_ALL_%";
    this.saiLabels.action_type.name[15] = "CALL AREA EXPLORED OR EVENT HAPPENS";
    this.saiLabels.action_type.name[16] = "UNUSED_16";
    this.saiLabels.action_type.name[17] = "SET EMOTE STATE";
    this.saiLabels.action_type.name[18] = "SET UNIT FLAG";
    this.saiLabels.action_type.name[19] = "REMOVE UNIT FLAG";
    this.saiLabels.action_type.name[20] = "AUTO_ATTACK";
    this.saiLabels.action_type.name[21] = "ALLOW_COMBAT_MOVEMENT";
    this.saiLabels.action_type.name[22] = "SET_EVENT_PHASE";
    this.saiLabels.action_type.name[23] = "INC_EVENT_PHASE";
    this.saiLabels.action_type.name[24] = "EVADE";
    this.saiLabels.action_type.name[25] = "FLEE_FOR_ASSIST";
    this.saiLabels.action_type.name[26] = "CALL_GROUP EVENT HAPPENS";
    this.saiLabels.action_type.name[27] = "CALL_CASTED CREATURE OR GO";
    this.saiLabels.action_type.name[28] = "REMOVEAURASFROMSPELL";
    this.saiLabels.action_type.name[29] = "FOLLOW";
    this.saiLabels.action_type.name[30] = "RANDOM_PHASE";
    this.saiLabels.action_type.name[31] = "RANDOM_PHASE_RANGE";
    this.saiLabels.action_type.name[32] = "RESET_GOBJECT";
    this.saiLabels.action_type.name[33] = "CALL_KILLEDMONSTER";
    this.saiLabels.action_type.name[34] = "SET_INST_DATA";
    this.saiLabels.action_type.name[35] = "SET_INST_DATA64";
    this.saiLabels.action_type.name[36] = "UPDATE_TEMPLATE";
    this.saiLabels.action_type.name[37] = "DIE";
    this.saiLabels.action_type.name[38] = "SET_IN_COMBAT_WITH_ZONE";
    this.saiLabels.action_type.name[39] = "CALL_FOR_HELP";
    this.saiLabels.action_type.name[40] = "SET_SHEATH";
    this.saiLabels.action_type.name[41] = "FORCE_DESPAWN";
    this.saiLabels.action_type.name[42] = "SET_INVINCIBILITY_HP_LEVEL";
    this.saiLabels.action_type.name[43] = "MOUNT_TO_ENTRY_OR_MODEL";
    this.saiLabels.action_type.name[44] = "SET_INGAME_PHASE_MASK";
    this.saiLabels.action_type.name[45] = "SET_DATA";
    this.saiLabels.action_type.name[46] = "Unused";
    this.saiLabels.action_type.name[47] = "SET_VISIBILITY";
    this.saiLabels.action_type.name[48] = "SET_ACTIVE";
    this.saiLabels.action_type.name[49] = "ATTACK_START";
    this.saiLabels.action_type.name[50] = "SUMMON_GO";
    this.saiLabels.action_type.name[51] = "KILL_UNIT";
    this.saiLabels.action_type.name[52] = "ACTIVATE_TAXI";
    this.saiLabels.action_type.name[53] = "WP_START";
    this.saiLabels.action_type.name[54] = "WP_PAUSE";
    this.saiLabels.action_type.name[55] = "WP_STOP";
    this.saiLabels.action_type.name[56] = "ADD_ITEM";
    this.saiLabels.action_type.name[57] = "REMOVE_ITEM";
    this.saiLabels.action_type.name[58] = "INSTALL_AI_TEMPLATE";
    this.saiLabels.action_type.name[59] = "SET_RUN";
    this.saiLabels.action_type.name[60] = "SMART_ACTION_SET_DISABLE_GRAVITY";
    this.saiLabels.action_type.name[61] = "SET_SWIM";
    this.saiLabels.action_type.name[62] = "TELEPORT";
    this.saiLabels.action_type.name[63] = "STORE VARIABLE DECIMAL";
    this.saiLabels.action_type.name[64] = "STORE_TARGET_LIST";
    this.saiLabels.action_type.name[65] = "WP_RESUME";
    this.saiLabels.action_type.name[66] = "SET_ORIENTATION";
    this.saiLabels.action_type.name[67] = "CREATE_TIMED_EVENT";
    this.saiLabels.action_type.name[68] = "PLAYMOVIE";
    this.saiLabels.action_type.name[69] = "MOVE_TO_POS";
    this.saiLabels.action_type.name[70] = "RESPAWN_TARGET";
    this.saiLabels.action_type.name[71] = "EQUIP";
    this.saiLabels.action_type.name[72] = "CLOSE_GOSSIP";
    this.saiLabels.action_type.name[73] = "TRIGGER_TIMED_EVENT";
    this.saiLabels.action_type.name[74] = "REMOVE_TIMED_EVENT";
    this.saiLabels.action_type.name[75] = "ADD_AURA";
    this.saiLabels.action_type.name[76] = "OVERRIDE_SCRIPT_BASE_OBJECT";
    this.saiLabels.action_type.name[77] = "RESET_SCRIPT_BASE_OBJECT";
    this.saiLabels.action_type.name[78] = "CALL_SCRIPT_RESET";
    this.saiLabels.action_type.name[79] = "SET_RANGED_MOVEMENT";
    this.saiLabels.action_type.name[80] = "CALL_TIMED_ACTIONLIST";
    this.saiLabels.action_type.name[81] = "SET_NPC_FLAG";
    this.saiLabels.action_type.name[82] = "ADD_NPC_FLAG";
    this.saiLabels.action_type.name[83] = "REMOVE_NPC_FLAG";
    this.saiLabels.action_type.name[84] = "SIMPLE_TALK";
    this.saiLabels.action_type.name[85] = "INVOKER_CAST";
    this.saiLabels.action_type.name[86] = "CROSS_CAST";
    this.saiLabels.action_type.name[87] = "CALL_RANDOM_TIMED_ACTIONLIST";
    this.saiLabels.action_type.name[88] = "CALL_RANDOM_RANGE_TIMED_ACTIONLIST";
    this.saiLabels.action_type.name[89] = "RANDOM_MOVE";
    this.saiLabels.action_type.name[90] = "SET_UNIT_FIELD_BYTES_1";
    this.saiLabels.action_type.name[91] = "REMOVE_UNIT_FIELD_BYTES_1";
    this.saiLabels.action_type.name[92] = "INTERRUPT_SPELL";
    this.saiLabels.action_type.name[93] = "SEND_GO_CUSTOM_ANIM";
    this.saiLabels.action_type.name[94] = "SET_DYNAMIC_FLAG";
    this.saiLabels.action_type.name[95] = "ADD_DYNAMIC_FLAG";
    this.saiLabels.action_type.name[96] = "REMOVE_DYNAMIC_FLAG";
    this.saiLabels.action_type.name[97] = "JUMP_TO_POS";
    this.saiLabels.action_type.name[98] = "SEND_GOSSIP_MENU";
    this.saiLabels.action_type.name[99] = "GO_SET_LOOT_STATE";
    this.saiLabels.action_type.name[100] = "SEND_TARGET_TO_TARGET";
    this.saiLabels.action_type.name[101] = "SET_HOME_POS";
    this.saiLabels.action_type.name[102] = "SET_HEALTH_REGEN";
    this.saiLabels.action_type.name[103] = "SET_ROOT";
    this.saiLabels.action_type.name[104] = "SET_GO_FLAG";
    this.saiLabels.action_type.name[105] = "ADD_GO_FLAG";
    this.saiLabels.action_type.name[106] = "REMOVE_GO_FLAG";
    this.saiLabels.action_type.name[107] = "SUMMON_CREATURE_GROUP";
    this.saiLabels.action_type.name[108] = "SET_POWER";
    this.saiLabels.action_type.name[109] = "ADD_POWER";
    this.saiLabels.action_type.name[110] = "REMOVE_POWER";
    this.saiLabels.action_type.name[111] = "SMART_ACTION_GAME_EVENT_STOP";
    this.saiLabels.action_type.name[112] = "SMART_ACTION_GAME_EVENT_START";
    this.saiLabels.action_type.name[113] = "Notused";
    this.saiLabels.action_type.name[114] = "MOVE_OFFSET";
    this.saiLabels.action_type.name[115] = "SMART_ACTION_RANDOM_SOUND";
    this.saiLabels.action_type.name[116] = "SMART_ACTION_SET_CORPSE_DELAY";
    this.saiLabels.action_type.name[117] = "SMART_ACTION_DISABLE_EVADE";
    this.saiLabels.action_type.name[118] = "SMART_ACTION_GO_SET_GO_STATE";
    this.saiLabels.action_type.name[119] = "SMART_ACTION_ADD_QUEST_OBJECTIVE";
    this.saiLabels.action_type.name[120] = "Unused";
    this.saiLabels.action_type.name[121] = "Unused";
    this.saiLabels.action_type.name[122] = "Unused";
    this.saiLabels.action_type.name[123] = "Unused";
    this.saiLabels.action_type.name[124] = "Unused";
    this.saiLabels.action_type.name[125] = "Unused";
    this.saiLabels.action_type.name[126] = "Unused";
    this.saiLabels.action_type.name[127] = "Unused";
    this.saiLabels.action_type.name[128] = "SMART_ACTION_PLAY_ANIMKIT";
    this.saiLabels.action_type.name[129] = "SMART_ACTION_SCENE_PLAY";
    this.saiLabels.action_type.name[130] = "SMART_ACTION_SCENE_CANCEL";
    this.saiLabels.action_type.name[131] = "SMART_ACTION_START_CONVERSATION";

    /* EVENT NAMES */
    this.saiLabels.event_type.name[0] = "UPDATE_IC(Or TimedEvent)";
    this.saiLabels.event_type.name[1] = "UPDATE_OUT_OF_COMBAT";
    this.saiLabels.event_type.name[2] = "HEALT_%";
    this.saiLabels.event_type.name[3] = "MANA_%";
    this.saiLabels.event_type.name[4] = "AGGRO";
    this.saiLabels.event_type.name[5] = "KILL";
    this.saiLabels.event_type.name[6] = "DEATH";
    this.saiLabels.event_type.name[7] = "EVADE";
    this.saiLabels.event_type.name[8] = "SPELLHIT";
    this.saiLabels.event_type.name[9] = "RANGE";
    this.saiLabels.event_type.name[10] = "OOC_LOS";
    this.saiLabels.event_type.name[11] = "RESPAWN";
    this.saiLabels.event_type.name[12] = "TARGET_HEALTH_%";
    this.saiLabels.event_type.name[13] = "TARGET_CASTING(Victim)";
    this.saiLabels.event_type.name[14] = "FRIENDLY_HEALTH";
    this.saiLabels.event_type.name[15] = "FRIENDLY_IS_CC";
    this.saiLabels.event_type.name[16] = "FRIENDLY_MISSING_BUFF";
    this.saiLabels.event_type.name[17] = "SUMMONED_UNIT";
    this.saiLabels.event_type.name[18] = "TARGET_MANA_%";
    this.saiLabels.event_type.name[19] = "ACCEPTED_QUEST";
    this.saiLabels.event_type.name[20] = "REWARD_QUEST";
    this.saiLabels.event_type.name[21] = "REACHED_HOME";
    this.saiLabels.event_type.name[22] = "RECEIVE_EMOTE";
    this.saiLabels.event_type.name[23] = "HAS_AURA";
    this.saiLabels.event_type.name[24] = "TARGET_BUFFED";
    this.saiLabels.event_type.name[25] = "RESET";
    this.saiLabels.event_type.name[26] = "IC_LOS";
    this.saiLabels.event_type.name[27] = "PASSENGER_BOARDED";
    this.saiLabels.event_type.name[28] = "PASSENGER_REMOVED";
    this.saiLabels.event_type.name[29] = "CHARMED";
    this.saiLabels.event_type.name[30] = "CHARMED_TARGET";
    this.saiLabels.event_type.name[31] = "SPELLHIT_TARGET";
    this.saiLabels.event_type.name[32] = "DAMAGED";
    this.saiLabels.event_type.name[33] = "DAMAGED_TARGET";
    this.saiLabels.event_type.name[34] = "MOVEMENT INFORM";
    this.saiLabels.event_type.name[35] = "SUMMON_DESPAWNED";
    this.saiLabels.event_type.name[36] = "CORPSE_REMOVED";
    this.saiLabels.event_type.name[37] = "AI_INIT";
    this.saiLabels.event_type.name[38] = "DATA_SET";
    this.saiLabels.event_type.name[39] = "WAYPOINT_START";
    this.saiLabels.event_type.name[40] = "WAYPOINT_REACHED";
    this.saiLabels.event_type.name[41] = "TRANSPORT_ADDPLAYER";
    this.saiLabels.event_type.name[42] = "TRANSPORT_ADDCREATURE";
    this.saiLabels.event_type.name[43] = "TRANSPORT_REMOVE_PLAYER";
    this.saiLabels.event_type.name[44] = "TRANSPORT_RELOCATE";
    this.saiLabels.event_type.name[45] = "INSTANCE_PLAYER_ENTER";
    this.saiLabels.event_type.name[46] = "AREATRIGGER_ONTRIGGER";
    this.saiLabels.event_type.name[47] = "QUEST_ACCEPTED";
    this.saiLabels.event_type.name[48] = "QUEST_OBJ_COPLETETION";
    this.saiLabels.event_type.name[49] = "QUEST_COMPLETION";
    this.saiLabels.event_type.name[50] = "QUEST_REWARDED";
    this.saiLabels.event_type.name[51] = "QUEST_FAIL";
    this.saiLabels.event_type.name[52] = "TEXT_OVER";
    this.saiLabels.event_type.name[53] = "RECEIVE_HEAL";
    this.saiLabels.event_type.name[54] = "JUST_SUMMONED";
    this.saiLabels.event_type.name[55] = "WAYPOINT_PAUSED";
    this.saiLabels.event_type.name[56] = "WAYPOINT_RESUMED";
    this.saiLabels.event_type.name[57] = "WAYPOINT_STOPPED";
    this.saiLabels.event_type.name[58] = "WAYPOINT_ENDED";
    this.saiLabels.event_type.name[59] = "TIMED_EVENT_TRIGGERED";
    this.saiLabels.event_type.name[60] = "UPDATE";
    this.saiLabels.event_type.name[61] = "LINK";
    this.saiLabels.event_type.name[62] = "GOSSIP_SELECT";
    this.saiLabels.event_type.name[63] = "JUST_CREATED";
    this.saiLabels.event_type.name[64] = "GOSSIP_HELLO";
    this.saiLabels.event_type.name[65] = "FOLLOW_COMPLETED";
    this.saiLabels.event_type.name[66] = "DUMMY_EFFECT";
    this.saiLabels.event_type.name[67] = "IS_BEHIND_TARGET";
    this.saiLabels.event_type.name[68] = "GAME_EVENT_START";
    this.saiLabels.event_type.name[69] = "GAME_EVENT_END";
    this.saiLabels.event_type.name[70] = "GO_STATE_CHANGED";
    this.saiLabels.event_type.name[71] = "GO_EVENT_INFORM";
    this.saiLabels.event_type.name[72] = "ACTION_DONE";
    this.saiLabels.event_type.name[73] = "ON_SPELLCLICK";
    this.saiLabels.event_type.name[74] = "FRIENDLY_HEALTH_PCT";
    this.saiLabels.event_type.name[75] = "DISTANCE_CREATURE";
    this.saiLabels.event_type.name[76] = "DISTANCE_GAMEOBJECT";
    this.saiLabels.event_type.name[77] = "COUNTER_SET";
    this.saiLabels.event_type.name[78] = "SMART_EVENT_SCENE_START";
    this.saiLabels.event_type.name[79] = "SMART_EVENT_SCENE_TRIGGER";
    this.saiLabels.event_type.name[80] = "SMART_EVENT_SCENE_CANCEL";
    this.saiLabels.event_type.name[81] = "SMART_EVENT_SCENE_COMPLETE";

    /* TARGET NAMES */
    this.saiLabels.target_type.name[0] = "NONE";
    this.saiLabels.target_type.name[1] = "SELF";
    this.saiLabels.target_type.name[2] = "VICTIM";
    this.saiLabels.target_type.name[3] = "HOSTILE_SECOND_AGGRO";
    this.saiLabels.target_type.name[4] = "HOSTILE_LAST_AGGRO";
    this.saiLabels.target_type.name[5] = "HOSTILE_RANDOM";
    this.saiLabels.target_type.name[6] = "HOSTILE_RANDOM_NOT_TOP";
    this.saiLabels.target_type.name[7] = "ACTION_INVOKER";
    this.saiLabels.target_type.name[8] = "POSITION";
    this.saiLabels.target_type.name[9] = "CREATURE_RANGE";
    this.saiLabels.target_type.name[10] = "CREATURE_GUID";
    this.saiLabels.target_type.name[11] = "CREATURE_DISTANCE";
    this.saiLabels.target_type.name[12] = "STORED";
    this.saiLabels.target_type.name[13] = "GAMEOBJECT_RANGE";
    this.saiLabels.target_type.name[14] = "GAMEOBJECT_GUID";
    this.saiLabels.target_type.name[15] = "GAMEOBJECT_DISTANCE";
    this.saiLabels.target_type.name[16] = "INVOKER_PARTY";
    this.saiLabels.target_type.name[17] = "PLAYER_RANGE";
    this.saiLabels.target_type.name[18] = "PLAYER_DISTANCE";
    this.saiLabels.target_type.name[19] = "CLOSEST_CREATURE";
    this.saiLabels.target_type.name[20] = "CLOSEST_GAMEOBJECT";
    this.saiLabels.target_type.name[21] = "CLOSEST_PLAYER";
    this.saiLabels.target_type.name[22] = "ACTION_INVOKER_VEHICLE";
    this.saiLabels.target_type.name[23] = "OWNER_OR_SUMMONER";
    this.saiLabels.target_type.name[24] = "THREAT_LIST";
    this.saiLabels.target_type.name[25] = "CLOSEST_ENEMY";
    this.saiLabels.target_type.name[26] = "CLOSEST_FRIENDLY";
    this.saiLabels.target_type.name[27] = "LOOT_RECIPIENTS";
    this.saiLabels.target_type.name[28] = "SMART_TARGET_FARTHEST";
    this.saiLabels.target_type.name[29] = "SMART_TARGET_VEHICLE_ACCESSORY";

    /* ACTION TOOLTIPS */
    this.saiLabels.action_type.tooltip[0] =
      "No action type is specified. Do not use because it will cause errors on start-up.";
    this.saiLabels.action_type.tooltip[1] =
      "Creature says a creature_text line";
    this.saiLabels.action_type.tooltip[2] = "Set faction of target";
    this.saiLabels.action_type.tooltip[3] =
      "Morph the creature to an entry or modelid. If both parameters are 0, this will demorph the creature";
    this.saiLabels.action_type.tooltip[4] = "Play a sound id";
    this.saiLabels.action_type.tooltip[5] = "Play en emote";
    this.saiLabels.action_type.tooltip[6] =
      "Set a certain quest of our (player) target to 'fail', making them have to re-take it";
    this.saiLabels.action_type.tooltip[7] =
      "Add a quest to our (player) target's quest list";
    this.saiLabels.action_type.tooltip[8] =
      "Set our reactstate (0 = passive, 1 = defensive, 2 = aggressive)";
    this.saiLabels.action_type.tooltip[9] =
      "Activate a gameobject (targets our target_type, so it must be a gameobject)";
    this.saiLabels.action_type.tooltip[10] =
      "Play a random emote. Out of a total of 6 parameters it will pick one and ignore all fields with the value '0'.";
    this.saiLabels.action_type.tooltip[11] = "Cast a spell to our target type";
    this.saiLabels.action_type.tooltip[12] =
      "Summons a creature of a certain entry for a given time (or permanent, depending on the summon type which is set in the second parameter).";
    this.saiLabels.action_type.tooltip[13] =
      "Add or remove a certain percentage of threat from our current threat. Only one of the parameters (so either 1 or 2) may be used at the same time";
    this.saiLabels.action_type.tooltip[14] =
      "Add or remove a certain percentage of threat from our current threat. Only one of the parameters (so either 1 or 2) may be used at the same time";
    this.saiLabels.action_type.tooltip[15] =
      "Complete a quest requirement (by entry) of our current (player) target.";
    this.saiLabels.action_type.tooltip[16] = "Unused action type";
    this.saiLabels.action_type.tooltip[17] = "Set emote state";
    this.saiLabels.action_type.tooltip[17] =
      "Set the emote state of the creature";
    this.saiLabels.action_type.tooltip[18] =
      "Set the unit flags of the target (using creature_template.unit_flags and creature_template.unit_flags2)";
    this.saiLabels.action_type.tooltip[19] =
      "Removes unit flags from the target (using creature_template.unit_flags and creature_template.unit_flags2)";
    this.saiLabels.action_type.tooltip[20] =
      "Start or stop attacking our target (start or stop is determined by first parameter).";
    this.saiLabels.action_type.tooltip[21] =
      "Allow or disallow moving while the creature is in combat";
    this.saiLabels.action_type.tooltip[22] =
      "Set the creature's event phasemask to a new value (warning: this is NOT the creature's actual phase!)";
    this.saiLabels.action_type.tooltip[23] =
      "Increment or decrement the creature's event phasemask (warning: this is NOT the creature's actual phase!)";
    this.saiLabels.action_type.tooltip[24] =
      "Makes the creature evade and therefore make it stop attacking and leave combat.";
    this.saiLabels.action_type.tooltip[25] =
      "Makes the creature flee for assistance of nearby friendly units";
    this.saiLabels.action_type.tooltip[26] =
      "Complete a quest requirement (by entry) of our current (player) target.";
    this.saiLabels.action_type.tooltip[27] =
      "Complete a quest requirement (by entry) of our current (player) target. Completes a killed monster credit as well as gives credit for a spellcast.";
    this.saiLabels.action_type.tooltip[28] =
      "Remove an aura/spell from our target";
    this.saiLabels.action_type.tooltip[29] =
      "Makes the creature follow the target at a certain distance and with a certain angle.";
    this.saiLabels.action_type.tooltip[30] =
      "Set the creature's event phase (warning: this is NOT the creature's actual phase!)";
    this.saiLabels.action_type.tooltip[31] =
      "Set the creature's event phase randomly between two values (warning: this is NOT the creature's actual phase!)";
    this.saiLabels.action_type.tooltip[32] =
      "Reset a gameobject, usually used to open/close a door (calls GameObject::ResetDoorOrButton).";
    this.saiLabels.action_type.tooltip[33] =
      "Gives a kill credit to our (player) target. The entry is the same entry as quest_template.RequiredNpcOrGo(1/2/3/4).";
    this.saiLabels.action_type.tooltip[34] =
      "Sets a certain instance data field to a specific value. This will be recieved and can be handled inside the InstanceScript of the instance we are sending this to (InstanceScripts are always written in C++).";
    this.saiLabels.action_type.tooltip[35] =
      "Sets a certain instance data field to a specific value. This will be recieved and can be handled inside the InstanceScript of the instance we are sending this to (InstanceScripts are always written in C++).";
    this.saiLabels.action_type.tooltip[36] =
      "Updates the creature's entry to a new one, making it become a completely different unit.";
    this.saiLabels.action_type.tooltip[37] = "Instantly kills the target";
    this.saiLabels.action_type.tooltip[38] =
      "Sets the creature in combat with its zone. Useful for bosses inside instances so all players will be set in combat until the fight ends.";
    this.saiLabels.action_type.tooltip[39] =
      "Makes the creature cry/call for help which makes nearby creatures that are not yet in combat and are able to assist this creature, run to this creature and attack its attackers.";
    this.saiLabels.action_type.tooltip[40] =
      "Set the sheathe state of the creature. The sheath state determines which weapon will be displayed on the model.";
    this.saiLabels.action_type.tooltip[41] =
      "Despawns the creature/gameobject within a given time (in milliseconds).";
    this.saiLabels.action_type.tooltip[42] =
      "Sets the creature's invincibility health to a flat value or percentage. Either one of the parameters must be set (so not both), and you can not reverse this effect (both parameters at 0 will result in an error).";
    this.saiLabels.action_type.tooltip[43] =
      "Sets the mount model to the model given in the second parameter (or takes the model of the entry given in the first parameter). Only one parameter may be used at the same time.";
    this.saiLabels.action_type.tooltip[44] =
      "Sets the ACTUAL phasemask of the creature. This is not the event phasemask, but the actual phasemask. Sets the phasemask column in the creature table in the world database.";
    this.saiLabels.action_type.tooltip[45] =
      "Calls SMART_EVENT_DATA_SET with given field and data, making it possible to communicate between different entries.";
    this.saiLabels.action_type.tooltip[46] =
      "Move a set amount of yards forward from the current position";
    this.saiLabels.action_type.tooltip[47] =
      "Sets the visibility of the creature or gameobject";
    this.saiLabels.action_type.tooltip[48] =
      "Sets whether or not the creature or gameobject is counted as 'active'. When it's set to be 'active', it means the grid this entitiy is spawned in is no longer able to become inactive.";
    this.saiLabels.action_type.tooltip[49] =
      "Makes the creature start attacking the first unit it finds on the target list.";
    this.saiLabels.action_type.tooltip[50] = "Summon a gameobject entry";
    this.saiLabels.action_type.tooltip[51] = "Kills the unit target instantly";
    this.saiLabels.action_type.tooltip[52] =
      "Activates a taxipath of the given id for our (player) target.";
    this.saiLabels.action_type.tooltip[53] =
      "Starts a waypoint using the `waypoints` table in the world database.";
    this.saiLabels.action_type.tooltip[54] =
      "Pauses the waypoint path the creature is currently following for a specific time (milliseconds).";
    this.saiLabels.action_type.tooltip[55] =
      "Stops the waypoint path the creature is currently following. Also allows you to specify a despawn time from that point on as well as which quest id should be counted as 'fail' (or not, based on the third parameter).";
    this.saiLabels.action_type.tooltip[56] =
      "Adds a certain item entry a specific amount of times to our player target.";
    this.saiLabels.action_type.tooltip[57] =
      "Removes a certain item entry a specific amount of times to our player target.";
    this.saiLabels.action_type.tooltip[58] =
      "Installs a SmartAI template which are basically pre-defined scripts for scripts that are used in a lot of cases. Thing of casters with specific spells, passive, turrets, etc.";
    this.saiLabels.action_type.tooltip[59] = "Sets running flag on or off.";
    this.saiLabels.action_type.tooltip[60] =
      "Sets disable gravity no fall down.";
    this.saiLabels.action_type.tooltip[61] = "Sets swimming flag on or off.";
    this.saiLabels.action_type.tooltip[62] =
      "Teleport target to a specific map using coordinates in the target X/Y/Z/O fields. Note: May NOT use SMART_TARGET_POSITION (8)!";
    this.saiLabels.action_type.tooltip[63] =
      "Stores a decimal variable (number) under a variable id to store information for the creature during runtime.";
    this.saiLabels.action_type.tooltip[64] =
      "Stores a list of targets under a variable id so it can later be read again.";
    this.saiLabels.action_type.tooltip[65] =
      "Resume the waypoint path the creature was previously following.";
    this.saiLabels.action_type.tooltip[66] =
      "Sets the orientation of the creature to a given value. Must use SMART_TARGET_POSITION. If you, however, want the creature to face its spawn/home position, you can just use SMART_TARGET_SELF and leave all parameters at 0.";
    this.saiLabels.action_type.tooltip[67] =
      "Calls SMART_EVENT_UPDATE after a specific time with given parameters.";
    this.saiLabels.action_type.tooltip[68] = "Plays a movie of a given entry.";
    this.saiLabels.action_type.tooltip[69] =
      "Move to a given position using the target co-ordinate fields (target_x/target_y/target_z/target_o) with SMART_TARGET_POSITION. First parameter is an id which can be read using SMART_EVENT_MOVEMENTINFORM. Explanation in tooltip.";
    this.saiLabels.action_type.tooltip[70] =
      "Respawns the target. Only works for gameobject target. Action does not actually respawn the target, it just sets the respawn time of the target, but this is how gameobject respawning is handled.";
    this.saiLabels.action_type.tooltip[71] =
      "Set the creature's equipment template to a certain entry. If no entry (first parameter) is set, it will set the three item entries which are ordered by slot (param3 is main-hand, param4 is off-hand, param5 is gun/bow/etc). The slotmask (param2) value is 0 by default and goes by bits, so if it's '2' it will only show the off-hand weapon (bits are 1, 2 and 4). Having 0 defaults to 7, so all slots.";
    this.saiLabels.action_type.tooltip[72] =
      "Closes the currently opened gossip to our player target.";
    this.saiLabels.action_type.tooltip[73] =
      "Calls SMART_EVENT_TIMED_EVENT_TRIGGERED with a given id.";
    this.saiLabels.action_type.tooltip[74] =
      "Interrupts the timed event called from SMART_ACTION_TRIGGER_TIMED_EVENT. 0 is NOT a proper value!";
    this.saiLabels.action_type.tooltip[75] = "Adds an aura to our target.";
    this.saiLabels.action_type.tooltip[76] =
      "Overrides the current creature's/gameobject's script to a new source using the targettype. If more than one target is specified, the first on the list will be used.";
    this.saiLabels.action_type.tooltip[77] =
      "Resets the script of the source to its original state. Only useful after SMART_ACTION_OVERRIDE_SCRIPT_BASE_OBJECT was called (because we store the original guid when doing this).";
    this.saiLabels.action_type.tooltip[78] =
      "Calls SMART_EVENT_RESET (only calls this, doesn't actually reset the creature/gameobject).";
    this.saiLabels.action_type.tooltip[79] =
      "Sets the creature's attack distance and angle to chase its target with. The distance (first parameter) is the minimum distance it will keep away from its target during combat.";
    this.saiLabels.action_type.tooltip[80] =
      "Calls a script for the source with a given entry.";
    this.saiLabels.action_type.tooltip[81] =
      "Set the npc flags of the target (using creature_template.npcflag)";
    this.saiLabels.action_type.tooltip[82] =
      "Adds npc flags of the target (using creature_template.npcflag)";
    this.saiLabels.action_type.tooltip[83] =
      "Removes npc flags of the target (using creature_template.npcflag)";
    this.saiLabels.action_type.tooltip[84] =
      "Functions the same as SMART_ACTION_TALK, except that it makes the player target say it. Does NOT trigger SMART_EVENT_TEXT_OVER.";
    this.saiLabels.action_type.tooltip[85] =
      "Make our action invoker type cast a spell to our target type";
    this.saiLabels.action_type.tooltip[86] =
      "Make the specified target type (in parameters) cast a spell to our target type";
    this.saiLabels.action_type.tooltip[87] =
      "Calls a random script for the source with given entries";
    this.saiLabels.action_type.tooltip[88] =
      "Calls a random script between two values for the source with given entries. So if parameter 1 is 500 and parameter 2 is 550, a script will randomly be picked between 500 and 550.";
    this.saiLabels.action_type.tooltip[89] =
      "Move randomly around within a given distance";
    this.saiLabels.action_type.tooltip[90] =
      "Set the unit field bytes 1 flags of the target to a specific value";
    this.saiLabels.action_type.tooltip[91] =
      "Removes specific unit field bytes 1 flags of the target";
    this.saiLabels.action_type.tooltip[92] =
      "Interrupt a given spell id (or any, if the second parameter is 0).";
    this.saiLabels.action_type.tooltip[93] =
      "Sends a custom gameobject animation from the target";
    this.saiLabels.action_type.tooltip[94] =
      "Sets the dynamic flags of the target to a specific value";
    this.saiLabels.action_type.tooltip[95] =
      "Adds dynamic flags to the current value of the target";
    this.saiLabels.action_type.tooltip[96] =
      "Removes specific dynamic flags of the target's current dynamic flags";
    this.saiLabels.action_type.tooltip[97] =
      "Jump to a given position with a given speed. Must use SMART_TARGET_POSITION with this action_type.";
    this.saiLabels.action_type.tooltip[98] =
      "Sends a specific gossip menu to a player which will then be opened for this player";
    this.saiLabels.action_type.tooltip[99] =
      "Sets the gameobject's loot state to a given value";
    this.saiLabels.action_type.tooltip[100] =
      "Sends a stored target id to our given target type. The id comes from SMART_ACTION_STORE_TARGET and can be used with SMART_TARGET_STORED";
    this.saiLabels.action_type.tooltip[101] =
      "Sets the home position of the source to a new position. The home position is the position the creature runs to when evading/reseting/etc. Uses the target type to determine the new home position.";
    this.saiLabels.action_type.tooltip[102] =
      "Turns the health regeneration of the creature on or off";
    this.saiLabels.action_type.tooltip[103] =
      "Roots or unroots the creature (or player target)";
    this.saiLabels.action_type.tooltip[104] =
      "Sets the gameobject's flags to a specific value";
    this.saiLabels.action_type.tooltip[105] =
      "Adds specific flags to the gameobject's flags field";
    this.saiLabels.action_type.tooltip[106] =
      "Removes specific flags from the gameobject's flags field";
    this.saiLabels.action_type.tooltip[107] =
      "Summon a set of creatures in once using the creature_summon_groups table in the world database.";
    this.saiLabels.action_type.tooltip[108] =
      "Sets the value of a given power type to a specific value";
    this.saiLabels.action_type.tooltip[109] =
      "Adds a given value to a given power type";
    this.saiLabels.action_type.tooltip[110] =
      "Removes a given value from a given power type";
    this.saiLabels.action_type.tooltip[112] =
      "Stops a game event with specified id (game_event.id)";
    this.saiLabels.action_type.tooltip[114] =
      "Target type 1 and X,Y axis distance forward is Y!";
    this.saiLabels.action_type.tooltip[113] =
      "Starts moving by the closest waypoint it can find. Parameters allow to give up to 6 waypoint id's and it will start the closest.";
    this.saiLabels.action_type.tooltip[117] =
      "Same like set antigravity with Flíing effect.";
    this.saiLabels.action_type.tooltip[118] =
      "You can stop movement for any target!.";
    this.saiLabels.action_type.tooltip[119] =
      "Add any Quest Objective count/complete...";
    this.saiLabels.action_type.tooltip[128] =
      "Type (0 = oneShot, 1 = AIanimKIT, 2 = meleeAnim, 3 = movementAnim)";

    /* EVENT TOOLTIPS */
    this.saiLabels.event_type.tooltip[0] =
      "While in combat. Parameters represent a timer: 1000,2000,4000,4000 will call this event_type randomly between 1 and 2 seconds and repeat this every 4 seconds";
    this.saiLabels.event_type.tooltip[1] =
      "While out of combat. Parameters represent a timer: 1000,2000,4000,4000 will call this event_type randomly between 1 and 2 seconds and repeat this every 4 seconds";
    this.saiLabels.event_type.tooltip[2] =
      "At health percentage. First and second parameters function as min-max health percentage values, so if they are  50,80, the event will be called when the source is between 50% and 80% health. The last two parameters are repeat timers in milliseconds.";
    this.saiLabels.event_type.tooltip[3] =
      "At mana percentage. First and second parameters function as min-max mana percentage values, so if they are  50,80, the event will be called when the source is between 50% and 80% mana. The last two parameters are repeat timers in milliseconds.";
    this.saiLabels.event_type.tooltip[4] = "When the creature enters combat";
    this.saiLabels.event_type.tooltip[5] = "When the creature killed something";
    this.saiLabels.event_type.tooltip[6] = "When the creature just died";
    this.saiLabels.event_type.tooltip[7] =
      "When the creature evades out of combat";
    this.saiLabels.event_type.tooltip[8] = "On creature struck by a spell id";
    this.saiLabels.event_type.tooltip[9] =
      "When the creature is within a certain range of our target type";
    this.saiLabels.event_type.tooltip[10] =
      "When the creature detects movement of an unit that is within line of sight while the creature is out of combat. This should be used when attempting to trigger an action when a player or so moves within a distance of some place/trigger.";
    this.saiLabels.event_type.tooltip[11] =
      "When the creature or gameobject respawns or spawns";
    this.saiLabels.event_type.tooltip[12] =
      "When the target of the creature is at a certain health percentage";
    this.saiLabels.event_type.tooltip[13] =
      "When the target of the creature is casting a spell. Leaving the third parameter at 0 will mean any spell the target casts will trigger this event.";
    this.saiLabels.event_type.tooltip[14] =
      "When a friendly unit within a certain range reaches a certain amount of health (NOT PERCENTAGE!). If you are looking for percentage, use event type 74.";
    this.saiLabels.event_type.tooltip[15] =
      "When a friendly unit within a certain range is under the effect of a crowd control spell";
    this.saiLabels.event_type.tooltip[16] =
      "When a friendly unit within a certain range is missing or having an aura/spell on them. If the first parameter is the spellid in a negative format, it will mean the event is triggered when a friendly unit within a certain range HAS a buff.";
    this.saiLabels.event_type.tooltip[17] =
      "When we summoned a creature with a certain entry. First parameter is the creature entry and if it's left at 0 it means we trigger this for any creature.";
    this.saiLabels.event_type.tooltip[18] =
      "When the target of the creature is at a certain mana percentage";
    this.saiLabels.event_type.tooltip[19] =
      "When the creature succesfully offered a quest to a player";
    this.saiLabels.event_type.tooltip[20] =
      "When the creature succesfully rewarded a quest of a player";
    this.saiLabels.event_type.tooltip[21] =
      "When the creature reached its home position";
    this.saiLabels.event_type.tooltip[22] =
      "When the creature receives an emote";
    this.saiLabels.event_type.tooltip[23] =
      "When the creature is missing or having an aura/spell on them. If the first parameter is the spellid in a negative format, it will mean the event is triggered when a friendly unit within a certain range is MISSING a buff.";
    this.saiLabels.event_type.tooltip[24] =
      "When the creature's target is missing or having an aura/spell on them. If the first parameter is the spellid in a negative format, it will mean the event is triggered when a friendly unit within a certain range is MISSING a buff.";
    this.saiLabels.event_type.tooltip[25] =
      "When the creature resets (evades, respawns, spawns or resets out of combat)";
    this.saiLabels.event_type.tooltip[26] =
      "When the creature detects movement of an unit that is within line of sight while the creature is in combat. This should be used when attempting to trigger an action when a player or so moves within a distance of some place/trigger.";
    this.saiLabels.event_type.tooltip[27] = "SMART_EVENT_PASSENGER_BOARDED";
    this.saiLabels.event_type.tooltip[28] = "SMART_EVENT_PASSENGER_REMOVED";
    this.saiLabels.event_type.tooltip[29] = "On creature charmed";
    this.saiLabels.event_type.tooltip[30] = "On target charmed";
    this.saiLabels.event_type.tooltip[31] = "On target spellhit by a spell";
    this.saiLabels.event_type.tooltip[32] =
      "On creature damaged for a certain amount";
    this.saiLabels.event_type.tooltip[33] =
      "On target damaged for a certain amount";
    this.saiLabels.event_type.tooltip[34] =
      "On movement inform. Useful when for example you want your creature to do something after it moving to a certain spot by using SMART_ACTION_MOVE_TO.";
    this.saiLabels.event_type.tooltip[35] = "On summoned unit despawned";
    this.saiLabels.event_type.tooltip[36] = "On creature corpse removal";
    this.saiLabels.event_type.tooltip[37] =
      "On AI initialization, so when the creature spawns (not when it respawns, resets or evades!)";
    this.saiLabels.event_type.tooltip[38] =
      "On data set, called after SMART_ACTION_SET_DATA is called to this source with a certain field and a certain value.";
    this.saiLabels.event_type.tooltip[39] = "On waypoint started";
    this.saiLabels.event_type.tooltip[40] = "On waypoint reached";
    this.saiLabels.event_type.tooltip[46] =
      "On areatrigger reached by a player";
    this.saiLabels.event_type.tooltip[52] =
      "When a creature says something it shows a balloon for a few seconds. This event is triggered after the balloon fades and thus the text 'finishes'.";
    this.saiLabels.event_type.tooltip[53] =
      "On creature received a certain heal amount";
    this.saiLabels.event_type.tooltip[54] =
      "Called when the creature or gameobject has just been summoned";
    this.saiLabels.event_type.tooltip[55] = "On waypoint paused";
    this.saiLabels.event_type.tooltip[56] = "On waypoint resumed";
    this.saiLabels.event_type.tooltip[57] = "On waypoint stopped";
    this.saiLabels.event_type.tooltip[58] = "On waypoint ended";
    this.saiLabels.event_type.tooltip[59] =
      "Called when a timed event called by SMART_ACTION_CREATE_TIMED_EVENT is triggered";
    this.saiLabels.event_type.tooltip[60] =
      "On update, should be used as a timer. Basically functions like both SMART_EVENT_UPDATE_IC and SMART_EVENT_UPDATE_OOC in one.";
    this.saiLabels.event_type.tooltip[61] = "On link";
    this.saiLabels.event_type.tooltip[62] =
      "Called on gossip option selected. Imagine you have four gossip items under the menu id 5 and their id's are 0, 1 and 2. If you now call this event with first parameter '5' and second parameter '1', it will be called when the second gossip option is selected. Tables gossip_menu_option and gossip_menu.";
    this.saiLabels.event_type.tooltip[63] =
      "On gameobject just created (so when it spawns for the first time)";
    this.saiLabels.event_type.tooltip[64] =
      "On gossip menu opened. Also called for gameobjects that just got 'opened' by a player.";
    this.saiLabels.event_type.tooltip[65] = "On follow completed/finished";
    this.saiLabels.event_type.tooltip[67] =
      "On behind target within a certain cooldown time";
    this.saiLabels.event_type.tooltip[68] = "On game event entry just started";
    this.saiLabels.event_type.tooltip[69] = "On game event entry just ended";
    this.saiLabels.event_type.tooltip[70] = "On gameobject state changed.";
    this.saiLabels.event_type.tooltip[71] =
      "Called when the gameobject becomes the target of an event happening. This is called in cases like a building is damaged/destroyed/rebuild, a goober is used, etc.";
    this.saiLabels.event_type.tooltip[72] =
      "Called on a certain action id 'done'. Those can only be called from core scripts (SmartAI::DoAction).";
    this.saiLabels.event_type.tooltip[73] =
      "On unit spellclick. For more information on what spellclicks are, take a look at the wiki and search for the table 'npc_spellclick_spells' (world database).";
    this.saiLabels.event_type.tooltip[74] =
      "When a friendly unit within a certain range reaches a certain health percentage (so NOT flat health!). If you are looking for a flat modifier, use event type 14.";
    this.saiLabels.event_type.tooltip[75] =
      "Event triggered when a creature with a specific guid or entry coems within a given distance (in yards) of the source.";
    this.saiLabels.event_type.tooltip[76] =
      "Event triggered when a gameobject with a specific guid or entry coems within a given distance (in yards) of the source.";

    /* TARGET TOOLTIPS */
    this.saiLabels.target_type.tooltip[0] =
      "No specified target. Only use this if you're sure the action type does not use targets at all (and event then it could not be safe. It's usually smart to default to SMART_TARGET_SELF (1)).";
    this.saiLabels.target_type.tooltip[1] =
      "Targets the creature/gameobject/areatrigger itself";
    this.saiLabels.target_type.tooltip[2] =
      "Targets the current victim of the creature";
    this.saiLabels.target_type.tooltip[3] =
      "The unit that is second highest on the current threatlist of the creature";
    this.saiLabels.target_type.tooltip[4] =
      "The unit that is last (so lowest threat) on the current threatlist of the creature";
    this.saiLabels.target_type.tooltip[5] =
      "A random unit on the current threatlist of the creature";
    this.saiLabels.target_type.tooltip[6] =
      "A random unit on the current threatlist of the creature. Ignores the last unit on the threatlist (so it can never target unit with lowest threat)";
    this.saiLabels.target_type.tooltip[7] =
      "The unit that caused this event type to occur. For example if used with SMART_EVENT_SPELLHIT, the initial caster of the spell will be targeted by this target type.";
    this.saiLabels.target_type.tooltip[8] =
      "Targets a given position. Only a handful of action types actually use this so make sure you're using one of these! This target type uses the target coordinate parameters and not the normal target parameter fields.";
    this.saiLabels.target_type.tooltip[9] =
      "Targets any creature of a given entry within a given range (if entry is left at 0 it will target all creatures within the given range)";
    this.saiLabels.target_type.tooltip[10] =
      "Targets a specific creature guid and entry";
    this.saiLabels.target_type.tooltip[11] =
      "Targets any creature of a given entry (or any creature, if first parameter is left at 0) within a given distance";
    this.saiLabels.target_type.tooltip[12] =
      "Takes a target stored by an id when using SMART_ACTION_STORE_TARGET_LIST";
    this.saiLabels.target_type.tooltip[13] =
      "Targets any gameobject of a given entry within a given range (if entry is left at 0 it will target all gameobjects within the given range)";
    this.saiLabels.target_type.tooltip[14] =
      "Targets a specific gameobject guid and entry";
    this.saiLabels.target_type.tooltip[15] =
      "Targets any gameobject of a given entry (or any gameobject, if first parameter is left at 0) within a given distance";
    this.saiLabels.target_type.tooltip[16] =
      "Targets all party members of the action invoker (SMART_TARGET_ACTION_INVOKER)";
    this.saiLabels.target_type.tooltip[17] =
      "Targets any player within a given minimum and maximum distance";
    this.saiLabels.target_type.tooltip[18] =
      "Targets any player within a given maximum distance";
    this.saiLabels.target_type.tooltip[19] =
      "Takes the closest creature within a given distance and entry (or the closest creature of any entry, if first parameter is left at 0).";
    this.saiLabels.target_type.tooltip[20] =
      "Takes the closest gameobject within a given distance and entry (or the closest gameobject of any entry, if first parameter is left at 0).";
    this.saiLabels.target_type.tooltip[21] =
      "Takes the closest player within a given distance";
    this.saiLabels.target_type.tooltip[22] =
      "Takes the vehicle of the action invoker (SMART_TARGET_ACTION_INVOKER)";
    this.saiLabels.target_type.tooltip[23] =
      "Takes the owner or the summoner of the creature/gameobject";
    this.saiLabels.target_type.tooltip[24] =
      "Targets the entire threatlist of the creature";
    this.saiLabels.target_type.tooltip[25] =
      "Takes the closest unfriendly unit (both creatures and players) within a given distance. If second parameter is set to 1, it will only target nearby friendly players";
    this.saiLabels.target_type.tooltip[26] =
      "Takes the closest friendly unit (both creatures and players) within a given distance. If second parameter is set to 1, it will only target nearby friendly players";
    this.saiLabels.target_type.tooltip[27] = "All tagging players";
    this.saiLabels.target_type.tooltip[28] = "Select most distanced player!";

    /*  ACTION PARAM MODAL FLAG PICKER*/

    /* ACTION PARAM1 NAMES */
    this.saiLabels.action_type.param1[1] = "GroupId";
    this.saiLabels.action_type.param1[2] = "FactionId";
    this.saiLabels.action_type.param1[3] = "Creature entry";
    this.saiLabels.action_type.param1[4] = "Sound id";
    this.saiLabels.action_type.param1[5] = "Emote id";
    this.saiLabels.action_type.param1[6] = "Quest id";
    this.saiLabels.action_type.param1[7] = "Quest id";
    this.saiLabels.action_type.param1[8] = "React state";
    this.saiLabels.action_type.param1[10] = "Emote id 1";
    this.saiLabels.action_type.param1[11] = "Spell ID";
    this.saiLabels.action_type.param1[12] = "Creature entry";
    this.saiLabels.action_type.param1[13] = "Threat increase in pct";
    this.saiLabels.action_type.param1[14] = "Threat increase in pct";
    this.saiLabels.action_type.param1[15] = "Quest id";
    this.saiLabels.action_type.param1[17] = "Emote id";
    this.saiLabels.action_type.param1[18] = "Unit flags";
    this.saiLabels.action_type.param1[19] = "Unit flags";
    this.saiLabels.action_type.param1[20] = "Start or stop (0 / 1)";
    this.saiLabels.action_type.param1[21] = "Allow or disallow (0 / 1)";
    this.saiLabels.action_type.param1[22] = "Phasemask";
    this.saiLabels.action_type.param1[23] = "Increment";
    this.saiLabels.action_type.param1[25] = "Say flee text (0 / 1)";
    this.saiLabels.action_type.param1[26] = "Quest id";
    this.saiLabels.action_type.param1[27] = "Creature id";
    this.saiLabels.action_type.param1[28] = "Spell id";
    this.saiLabels.action_type.param1[29] = "Distance";
    this.saiLabels.action_type.param1[30] = "Phasemask 1";
    this.saiLabels.action_type.param1[31] = "Phasemask 1";
    this.saiLabels.action_type.param1[33] = "Creature entry";
    this.saiLabels.action_type.param1[34] = "Field";
    this.saiLabels.action_type.param1[35] = "Field";
    this.saiLabels.action_type.param1[36] = "Creature entry";
    this.saiLabels.action_type.param1[39] = "Radius";
    this.saiLabels.action_type.param1[40] = "Sheath state";
    this.saiLabels.action_type.param1[41] = "Time to despawn (ms)";
    this.saiLabels.action_type.param1[42] = "Flat value";
    this.saiLabels.action_type.param1[43] = "Creature entry";
    this.saiLabels.action_type.param1[44] = "Phasemask";
    this.saiLabels.action_type.param1[45] = "Field";
    this.saiLabels.action_type.param1[46] = "Distance in yards";
    this.saiLabels.action_type.param1[47] = "Visible (0/1)";
    this.saiLabels.action_type.param1[48] = "Active (0/1)";
    this.saiLabels.action_type.param1[50] = "Gameobject entry";
    this.saiLabels.action_type.param1[52] = "Taxi id";
    this.saiLabels.action_type.param1[53] = "Walk/run (0/1)";
    this.saiLabels.action_type.param1[54] = "Time (ms)";
    this.saiLabels.action_type.param1[55] = "Despawn time (ms)";
    this.saiLabels.action_type.param1[56] = "Item entry";
    this.saiLabels.action_type.param1[57] = "Item entry";
    this.saiLabels.action_type.param1[58] = "Template entry";
    this.saiLabels.action_type.param1[59] = "Off/on (0/1)";
    this.saiLabels.action_type.param1[60] = "Off/on (0/1)";
    this.saiLabels.action_type.param1[61] = "Off/on (0/1)";
    this.saiLabels.action_type.param1[62] = "Map id";
    this.saiLabels.action_type.param1[63] = "Variable id";
    this.saiLabels.action_type.param1[64] = "Variable id";
    this.saiLabels.action_type.param1[67] = "Event id";
    this.saiLabels.action_type.param1[68] = "Movie entry";
    this.saiLabels.action_type.param1[69] = "Point id (0 any)";
    this.saiLabels.action_type.param1[70] = "Respawn time (seconds)";
    this.saiLabels.action_type.param1[71] = "Equip template entry";
    this.saiLabels.action_type.param1[73] = "Event id";
    this.saiLabels.action_type.param1[75] = "Spell id";
    this.saiLabels.action_type.param1[79] = "Attack distance";
    this.saiLabels.action_type.param1[80] = "Script entry";
    this.saiLabels.action_type.param1[81] = "Npc flags";
    this.saiLabels.action_type.param1[82] = "Npc flags";
    this.saiLabels.action_type.param1[83] = "Npc flags";
    this.saiLabels.action_type.param1[84] = "Groupid";
    this.saiLabels.action_type.param1[85] = "Spell ID";
    this.saiLabels.action_type.param1[86] = "Spell ID";
    this.saiLabels.action_type.param1[87] = "Script entry 1";
    this.saiLabels.action_type.param1[88] = "Script entry 1";
    this.saiLabels.action_type.param1[89] = "Maximum distance";
    this.saiLabels.action_type.param1[90] = "Unit field bytes 1";
    this.saiLabels.action_type.param1[91] = "Unit field bytes 1";
    this.saiLabels.action_type.param1[92] = "With delay (0/1)";
    this.saiLabels.action_type.param1[93] = "Animation (0-255)";
    this.saiLabels.action_type.param1[94] = "Dynamic flags";
    this.saiLabels.action_type.param1[95] = "Dynamic flags";
    this.saiLabels.action_type.param1[96] = "Dynamic flags";
    this.saiLabels.action_type.param1[97] = "Speed XY";
    this.saiLabels.action_type.param1[98] = "Gossip menu id";
    this.saiLabels.action_type.param1[99] = "Gameobject state";
    this.saiLabels.action_type.param1[100] = "Target id";
    this.saiLabels.action_type.param1[102] = "Off/on (0/1)";
    this.saiLabels.action_type.param1[103] = "Unroot/root (0/1)";
    this.saiLabels.action_type.param1[104] = "Gameobject flags";
    this.saiLabels.action_type.param1[105] = "Gameobject flags";
    this.saiLabels.action_type.param1[106] = "Gameobject flags";
    this.saiLabels.action_type.param1[107] = "Summon group id";
    this.saiLabels.action_type.param1[108] = "Power type";
    this.saiLabels.action_type.param1[109] = "Power type";
    this.saiLabels.action_type.param1[110] = "Power type";
    this.saiLabels.action_type.param1[111] = "Id of the event";
    this.saiLabels.action_type.param1[112] = "Id of the event";
    this.saiLabels.action_type.param1[113] = "Waypoint 1";
    this.saiLabels.action_type.param1[115] = "soundId1";
    this.saiLabels.action_type.param1[116] = "timer";
    this.saiLabels.action_type.param1[117] = "0/1 (1 = disabled, 0 = enabled)";
    this.saiLabels.action_type.param1[118] = "State";
    this.saiLabels.action_type.param1[119] = "QuestID";
    this.saiLabels.action_type.param1[128] = "id";
    this.saiLabels.action_type.param1[129] = "sceneId";
    this.saiLabels.action_type.param1[130] = "sceneId";
    this.saiLabels.action_type.param1[131] = "Conversation ID";

    /* ACTION PARAM2 NAMES */
    this.saiLabels.action_type.param2[1] = "Duration";
    this.saiLabels.action_type.param2[3] = "Creature model";
    this.saiLabels.action_type.param2[4] = "Only to self (0/1)";
    this.saiLabels.action_type.param2[10] = "Emote id 2";
    this.saiLabels.action_type.param2[11] = "Cast Flags";
    this.saiLabels.action_type.param2[12] = "Summon type";
    this.saiLabels.action_type.param2[13] = "Threat decrease in pct";
    this.saiLabels.action_type.param2[14] = "Threat decrease in pct";
    this.saiLabels.action_type.param2[18] = "Type (0 / 1)";
    this.saiLabels.action_type.param2[19] = "Type (0 / 1)";
    this.saiLabels.action_type.param2[23] = "Decrement";
    this.saiLabels.action_type.param2[27] = "Spell id";
    this.saiLabels.action_type.param2[28] = "Charges";
    this.saiLabels.action_type.param2[29] = "Angle";
    this.saiLabels.action_type.param2[30] = "Phasemask 2";
    this.saiLabels.action_type.param2[31] = "Phasemask 2";
    this.saiLabels.action_type.param2[34] = "Data";
    this.saiLabels.action_type.param2[35] = "Data";
    this.saiLabels.action_type.param2[36] = "Team";
    this.saiLabels.action_type.param2[39] = "Say text (0/1)";
    this.saiLabels.action_type.param2[42] = "Pct value";
    this.saiLabels.action_type.param2[43] = "Creature model";
    this.saiLabels.action_type.param2[45] = "Data";
    this.saiLabels.action_type.param2[50] = "Duration (ms)";
    this.saiLabels.action_type.param2[53] = "Waypoint entry";
    this.saiLabels.action_type.param2[55] = "Quest id";
    this.saiLabels.action_type.param2[56] = "Count";
    this.saiLabels.action_type.param2[57] = "Count";
    this.saiLabels.action_type.param2[63] = "Decimal";
    this.saiLabels.action_type.param2[67] = "InitialMin";
    this.saiLabels.action_type.param2[71] = "Slotmask";
    this.saiLabels.action_type.param2[79] = "Attack angle";
    this.saiLabels.action_type.param2[80] = "Timer type (0/1/2)";
    this.saiLabels.action_type.param2[85] = "Cast Flags";
    this.saiLabels.action_type.param2[86] = "Cast Flags";
    this.saiLabels.action_type.param2[87] = "Script entry 2";
    this.saiLabels.action_type.param2[88] = "Script entry 2";
    this.saiLabels.action_type.param2[90] = "Type (0/2/3)";
    this.saiLabels.action_type.param2[91] = "Type (0/2/3)";
    this.saiLabels.action_type.param2[92] = "Spell id (0 any)";
    this.saiLabels.action_type.param2[97] = "Speed Z";
    this.saiLabels.action_type.param2[98] = "Npc text id";
    this.saiLabels.action_type.param2[107] = "Attack invoker (0 / 1)";
    this.saiLabels.action_type.param2[108] = "Power value";
    this.saiLabels.action_type.param2[109] = "Power value";
    this.saiLabels.action_type.param2[110] = "Power value";
    this.saiLabels.action_type.param2[113] = "Waypoint 2";
    this.saiLabels.action_type.param2[115] = "soundId2";
    this.saiLabels.action_type.param2[118] = "Movementexpired (0/1)";
    this.saiLabels.action_type.param2[119] = "QuestObjective";
    this.saiLabels.action_type.param2[128] = "Type";

    /* ACTION PARAM3 NAMES */
    this.saiLabels.action_type.param3[10] = "Emote id 3";
    this.saiLabels.action_type.param3[12] = "Duration (milliseconds)";
    this.saiLabels.action_type.param3[29] = "End creature entry";
    this.saiLabels.action_type.param3[30] = "Phasemask 3";
    this.saiLabels.action_type.param3[53] = "Repeat path (0/1)";
    this.saiLabels.action_type.param3[55] = "Fail quest (0/1)";
    this.saiLabels.action_type.param3[67] = "InitialMax";
    this.saiLabels.action_type.param3[69] = "DisablePathfinding (0/1)";
    this.saiLabels.action_type.param3[71] = "Item entry 1";
    this.saiLabels.action_type.param3[86] = "Target type of caster";
    this.saiLabels.action_type.param3[87] = "Script entry 3";
    this.saiLabels.action_type.param3[92] = "Instant (0/1)";
    this.saiLabels.action_type.param3[113] = "Waypoint 3";
    this.saiLabels.action_type.param3[115] = "soundId3";
    this.saiLabels.action_type.param3[119] = "Count (0=All)";

    /* ACTION PARAM4 NAMES */
    this.saiLabels.action_type.param4[10] = "Emote id 4";
    this.saiLabels.action_type.param4[11] = "TargetsLimit";
    this.saiLabels.action_type.param4[12] = "Attack invoker (0/1)";
    this.saiLabels.action_type.param4[29] = "Credit creature entry";
    this.saiLabels.action_type.param4[30] = "Phasemask 4";
    this.saiLabels.action_type.param4[53] = "Quest id";
    this.saiLabels.action_type.param4[67] = "RepeatMin";
    this.saiLabels.action_type.param4[71] = "Item entry 2";
    this.saiLabels.action_type.param4[85] = "TargetsLimit";
    this.saiLabels.action_type.param4[86] = "Target parameter 1 of caster";
    this.saiLabels.action_type.param4[87] = "Script entry 4";
    this.saiLabels.action_type.param4[113] = "Waypoint 4";
    this.saiLabels.action_type.param4[115] = "soundId4";

    /* ACTION PARAM5 NAMES */
    this.saiLabels.action_type.param5[10] = "Emote id 5";
    this.saiLabels.action_type.param5[12] = "isPersonnal (0/1)";
    this.saiLabels.action_type.param5[29] = "Credit type (0 / 1)";
    this.saiLabels.action_type.param5[30] = "Phasemask 5";
    this.saiLabels.action_type.param5[53] = "Despawn time after path";
    this.saiLabels.action_type.param5[67] = "RepeatMax";
    this.saiLabels.action_type.param5[71] = "Item entry 3";
    this.saiLabels.action_type.param5[86] = "Target parameter 2 of caster";
    this.saiLabels.action_type.param5[87] = "Script entry 5";
    this.saiLabels.action_type.param5[113] = "Waypoint 5";
    this.saiLabels.action_type.param5[115] = "soundId5";

    /* ACTION PARAM6 NAMES */
    this.saiLabels.action_type.param6[10] = "Emote id 6";
    this.saiLabels.action_type.param6[12] = "Set Data (500ms)";
    this.saiLabels.action_type.param6[30] = "Phasemask 6";
    this.saiLabels.action_type.param6[53] = "Reactstate";
    this.saiLabels.action_type.param6[67] = "Chance";
    this.saiLabels.action_type.param6[86] = "Target parameter 3 of caster";
    this.saiLabels.action_type.param6[87] = "Script entry 6";
    this.saiLabels.action_type.param6[113] = "Waypoint 6";
    this.saiLabels.action_type.param6[115] = "onlySelf";

    /* EVENT PARAM1 NAMES */
    this.saiLabels.event_type.param1[0] = "InitialMin";
    this.saiLabels.event_type.param1[1] = "InitialMin";
    this.saiLabels.event_type.param1[2] = "Min health pct";
    this.saiLabels.event_type.param1[3] = "Min mana pct";
    this.saiLabels.event_type.param1[5] = "Cooldown min";
    this.saiLabels.event_type.param1[8] = "Spell id (0 any)";
    this.saiLabels.event_type.param1[9] = "Min distance to target";
    this.saiLabels.event_type.param1[10] = "Ignore hostile targets (0/1)";
    this.saiLabels.event_type.param1[11] = "Respawn condition";
    this.saiLabels.event_type.param1[12] = "Health pct min";
    this.saiLabels.event_type.param1[13] = "RepeatMin";
    this.saiLabels.event_type.param1[14] = "Health deficit (flat)";
    this.saiLabels.event_type.param1[15] = "Radius";
    this.saiLabels.event_type.param1[16] = "Spellid";
    this.saiLabels.event_type.param1[17] = "Creature id (0 any)";
    this.saiLabels.event_type.param1[18] = "Mana pct min";
    this.saiLabels.event_type.param1[19] = "Quest id (0 any)";
    this.saiLabels.event_type.param1[20] = "Quest id (0 any)";
    this.saiLabels.event_type.param1[22] = "Emote id";
    this.saiLabels.event_type.param1[23] = "Spell id";
    this.saiLabels.event_type.param1[24] = "Spell id";
    this.saiLabels.event_type.param1[26] = "Ignore hostile targets (0/1)";
    this.saiLabels.event_type.param1[31] = "Spell id";
    this.saiLabels.event_type.param1[32] = "Minimum damage";
    this.saiLabels.event_type.param1[33] = "Minimum damage";
    this.saiLabels.event_type.param1[34] = "Movement type (0 any)";
    this.saiLabels.event_type.param1[35] = "Creature entry (0 any)";
    this.saiLabels.event_type.param1[38] = "Field";
    this.saiLabels.event_type.param1[39] = "Point id (0 any)";
    this.saiLabels.event_type.param1[40] = "Point id (0 any)";
    this.saiLabels.event_type.param1[46] = "Areatrigger id (0 any)";
    this.saiLabels.event_type.param1[52] = "Group id (creature_text)";
    this.saiLabels.event_type.param1[53] = "Minimum heal";
    this.saiLabels.event_type.param1[55] = "Point id (0 any)";
    this.saiLabels.event_type.param1[56] = "Point id (0 any)";
    this.saiLabels.event_type.param1[57] = "Point id (0 any)";
    this.saiLabels.event_type.param1[58] = "Point id (0 any)";
    this.saiLabels.event_type.param1[59] = "Event id";
    this.saiLabels.event_type.param1[60] = "InitialMin";
    this.saiLabels.event_type.param1[62] = "Gossip menu id";
    this.saiLabels.event_type.param1[67] = "CooldownMin";
    this.saiLabels.event_type.param1[68] = "Game event entry";
    this.saiLabels.event_type.param1[69] = "Game event entry";
    this.saiLabels.event_type.param1[70] = "Gameobject state";
    this.saiLabels.event_type.param1[71] = "Event id";
    this.saiLabels.event_type.param1[72] = "Action id";
    this.saiLabels.event_type.param1[74] = "Health pct min";
    this.saiLabels.event_type.param1[75] = "Guid";
    this.saiLabels.event_type.param1[76] = "Guid";

    /* EVENT PARAM2 NAMES */
    this.saiLabels.event_type.param2[0] = "InitialMax";
    this.saiLabels.event_type.param2[1] = "InitialMax";
    this.saiLabels.event_type.param2[2] = "Max health pct";
    this.saiLabels.event_type.param2[3] = "Max mana pct";
    this.saiLabels.event_type.param2[5] = "Cooldown max";
    this.saiLabels.event_type.param2[8] = "Spell school (0 any)";
    this.saiLabels.event_type.param2[9] = "Max distance to target";
    this.saiLabels.event_type.param2[10] = "Max distance to target";
    this.saiLabels.event_type.param2[11] = "Map id condition";
    this.saiLabels.event_type.param2[12] = "Health pct max";
    this.saiLabels.event_type.param2[13] = "RepeatMax";
    this.saiLabels.event_type.param2[14] = "Radius";
    this.saiLabels.event_type.param2[15] = "RepeatMin";
    this.saiLabels.event_type.param2[16] = "Radius";
    this.saiLabels.event_type.param2[17] = "RepeatMin";
    this.saiLabels.event_type.param2[18] = "Mana pct max";
    this.saiLabels.event_type.param2[22] = "RepeatMin";
    this.saiLabels.event_type.param2[23] = "Stacks";
    this.saiLabels.event_type.param2[24] = "Stacks";
    this.saiLabels.event_type.param2[26] = "Max distance to target";
    this.saiLabels.event_type.param2[31] = "Spell school";
    this.saiLabels.event_type.param2[32] = "Maximum damage";
    this.saiLabels.event_type.param2[33] = "Maximum damage";
    this.saiLabels.event_type.param2[34] = "Point id";
    this.saiLabels.event_type.param2[35] = "CooldownMin";
    this.saiLabels.event_type.param2[38] = "Value";
    this.saiLabels.event_type.param2[39] = "Path id (0 any)";
    this.saiLabels.event_type.param2[40] = "Path id (0 any)";
    this.saiLabels.event_type.param2[52] = "Creature entry (0 any)";
    this.saiLabels.event_type.param2[53] = "Maximum heal";
    this.saiLabels.event_type.param2[55] = "Path id (0 any)";
    this.saiLabels.event_type.param2[56] = "Path id (0 any)";
    this.saiLabels.event_type.param2[57] = "Path id (0 any)";
    this.saiLabels.event_type.param2[58] = "Path id (0 any)";
    this.saiLabels.event_type.param2[60] = "InitialMax";
    this.saiLabels.event_type.param2[62] = "Gossip item id";
    this.saiLabels.event_type.param2[67] = "CooldownMax";
    this.saiLabels.event_type.param2[74] = "Health pct max";
    this.saiLabels.event_type.param2[75] = "Entry";
    this.saiLabels.event_type.param2[76] = "Entry";

    /* EVENT PARAM3 NAMES */
    this.saiLabels.event_type.param3[0] = "RepeatMin";
    this.saiLabels.event_type.param3[1] = "RepeatMin";
    this.saiLabels.event_type.param3[2] = "RepeatMin";
    this.saiLabels.event_type.param3[3] = "RepeatMin";
    this.saiLabels.event_type.param3[5] = "Player only (0/1)";
    this.saiLabels.event_type.param3[8] = "CooldownMin";
    this.saiLabels.event_type.param3[9] = "RepeatMin";
    this.saiLabels.event_type.param3[10] = "Cooldown min";
    this.saiLabels.event_type.param3[11] = "Zone id condition";
    this.saiLabels.event_type.param3[12] = "RepeatMin";
    this.saiLabels.event_type.param3[13] = "Spell id";
    this.saiLabels.event_type.param3[14] = "RepeatMin";
    this.saiLabels.event_type.param3[15] = "RepeatMax";
    this.saiLabels.event_type.param3[16] = "RepeatMin";
    this.saiLabels.event_type.param3[17] = "RepeatMax";
    this.saiLabels.event_type.param3[18] = "RepeatMin";
    this.saiLabels.event_type.param3[22] = "RepeatMax";
    this.saiLabels.event_type.param3[23] = "RepeatMin";
    this.saiLabels.event_type.param3[24] = "RepeatMin";
    this.saiLabels.event_type.param3[26] = "Cooldown min";
    this.saiLabels.event_type.param3[31] = "RepeatMin";
    this.saiLabels.event_type.param3[32] = "RepeatMin";
    this.saiLabels.event_type.param3[33] = "RepeatMin";
    this.saiLabels.event_type.param3[35] = "CooldownMax";
    this.saiLabels.event_type.param3[38] = "CooldownMin";
    this.saiLabels.event_type.param3[53] = "CooldownMin";
    this.saiLabels.event_type.param3[60] = "RepeatMin";
    this.saiLabels.event_type.param3[74] = "RepeatMin";
    this.saiLabels.event_type.param3[75] = "Distance";
    this.saiLabels.event_type.param3[76] = "Distance";

    /* EVENT PARAM4 NAMES */
    this.saiLabels.event_type.param4[0] = "RepeatMax";
    this.saiLabels.event_type.param4[1] = "RepeatMax";
    this.saiLabels.event_type.param4[2] = "RepeatMax";
    this.saiLabels.event_type.param4[3] = "RepeatMax";
    this.saiLabels.event_type.param4[5] = "Entry (if parameter 3 is 0)";
    this.saiLabels.event_type.param4[8] = "CooldownMax";
    this.saiLabels.event_type.param4[9] = "RepeatMax";
    this.saiLabels.event_type.param4[10] = "Cooldown max";
    this.saiLabels.event_type.param4[12] = "RepeatMax";
    this.saiLabels.event_type.param4[14] = "RepeatMax";
    this.saiLabels.event_type.param4[16] = "RepeatMax";
    this.saiLabels.event_type.param4[18] = "RepeatMax";
    this.saiLabels.event_type.param4[23] = "RepeatMax";
    this.saiLabels.event_type.param4[24] = "RepeatMax";
    this.saiLabels.event_type.param4[26] = "Cooldown max";
    this.saiLabels.event_type.param4[31] = "RepeatMax";
    this.saiLabels.event_type.param4[32] = "RepeatMax";
    this.saiLabels.event_type.param4[33] = "RepeatMax";
    this.saiLabels.event_type.param4[38] = "CooldownMax";
    this.saiLabels.event_type.param4[53] = "CooldownMax";
    this.saiLabels.event_type.param4[60] = "RepeatMax";
    this.saiLabels.event_type.param4[74] = "RepeatMax";
    this.saiLabels.event_type.param4[75] = "RepeatTimer";
    this.saiLabels.event_type.param4[76] = "RepeatTimer";

    /* TARGET PARAM1 NAMES */
    this.saiLabels.target_type.param1[3] = "MaxDistance";
    this.saiLabels.target_type.param1[4] = "MaxDistance";
    this.saiLabels.target_type.param1[5] = "MaxDistance";
    this.saiLabels.target_type.param1[6] = "MaxDistance";
    this.saiLabels.target_type.param1[9] = "Creature entry (0 any)";
    this.saiLabels.target_type.param1[10] = "Creature guid";
    this.saiLabels.target_type.param1[11] = "Creature entry (0 any)";
    this.saiLabels.target_type.param1[12] = "Store id";
    this.saiLabels.target_type.param1[13] = "Gameobject entry (0 any)";
    this.saiLabels.target_type.param1[14] = "Gameobject guid";
    this.saiLabels.target_type.param1[15] = "Gameobject entry (0 any)";
    this.saiLabels.target_type.param1[17] = "Minimum distance";
    this.saiLabels.target_type.param1[18] = "MaxDistance";
    this.saiLabels.target_type.param1[19] = "Creature entry (0 any)";
    this.saiLabels.target_type.param1[20] = "Gameobject entry (0 any)";
    this.saiLabels.target_type.param1[21] = "Maximum distance";
    this.saiLabels.target_type.param1[25] = "Maximum distance";
    this.saiLabels.target_type.param1[26] = "Maximum distance";
    this.saiLabels.target_type.param1[28] = "MaxDistance";

    /* TARGET PARAM2 NAMES */
    this.saiLabels.target_type.param2[3] = "PlayerOnly";
    this.saiLabels.target_type.param2[4] = "PlayerOnly";
    this.saiLabels.target_type.param2[5] = "PlayerOnly";
    this.saiLabels.target_type.param2[6] = "PlayerOnly";
    this.saiLabels.target_type.param2[9] = "Minimum distance";
    this.saiLabels.target_type.param2[10] = "Creature entry";
    this.saiLabels.target_type.param2[11] = "Maximum distance";
    this.saiLabels.target_type.param2[13] = "Minimum distance";
    this.saiLabels.target_type.param2[14] = "Gameobject entry";
    this.saiLabels.target_type.param2[15] = "Maximum distance";
    this.saiLabels.target_type.param2[17] = "Maximum distance";
    this.saiLabels.target_type.param2[19] = "Maximum distance";
    this.saiLabels.target_type.param2[20] = "Maximum distance";
    this.saiLabels.target_type.param2[25] = "Player only (0/1)";
    this.saiLabels.target_type.param2[26] = "Player only (0/1)";
    this.saiLabels.target_type.param2[28] = "PlayerOnly";

    /* TARGET PARAM3 NAMES */
    this.saiLabels.target_type.param3[3] = "PowerType(1,4)";
    this.saiLabels.target_type.param3[4] = "PowerType (1,4)";
    this.saiLabels.target_type.param3[5] = "PowerType (1,4)";
    this.saiLabels.target_type.param3[6] = "PowerType (1,4)";
    this.saiLabels.target_type.param3[9] = "Maximum distance";
    this.saiLabels.target_type.param3[13] = "Maximum distance";
    this.saiLabels.target_type.param3[19] = "Must be dead (0/1)";
    this.saiLabels.target_type.param3[28] = "isINLos? (0/1)";

    /* ACTION PARAM1 TOOLTIPS */
    this.saiLabels.action_type.paramTooltip1[1] = "creature_text.groupid";
    this.saiLabels.action_type.paramTooltip1[11] =
      "Flags Interrupt any spell casting:1 , SMARTCAST_TRIGGERED: 2, CAST_FORCE_CAST: 4, CAST_FORCE_TARGET_SELF:16, SMARTCAST_COMBAT_MOVE: 64";
    this.saiLabels.action_type.paramTooltip1[20] =
      "If set to 0 it means the creature will stop attacking its current target. Otherwise it starts / continues to attack its target.";
    this.saiLabels.action_type.paramTooltip1[21] =
      "If set to 0 it means the creature is no longer able to move AT ALL during combat. If set to 1 it means it's allowed to normally walk during combat.";
    this.saiLabels.action_type.paramTooltip1[25] =
      'Determines whether or not the creature should say something along the lines of "<name> starts fleeing ..." when it flees. If 0, it won\'t say anything (unless set manually). If above 0 it will say the automatic text.';
    this.saiLabels.action_type.paramTooltip1[28] =
      "Amount of charges of said aura to be removed. If 0, the whole aura is removed.";
    this.saiLabels.action_type.paramTooltip1[36] =
      "The creature entry we want to become (creature_template.entry)";
    this.saiLabels.action_type.paramTooltip1[39] =
      "Radius to call for help within";
    this.saiLabels.action_type.paramTooltip1[53] =
      "If set to 0, the creature will follow the path walking at a normal speed. If set to anything above 0 it will be running at a higher speed.";
    this.saiLabels.action_type.paramTooltip1[55] =
      "Time in milliseconds after which the creature despawns when the path was stopped.";
    this.saiLabels.action_type.paramTooltip1[69] =
      "If set to a value, SMART_EVENT_MOVEMENTINFORM will be called with this number when the unit finished moving to this position.";
    this.saiLabels.action_type.paramTooltip1[71] =
      "Entry of creature_equip_template. If left at 0, either parameter 3, 4 or 5 (or all, or just two) must be filled in with item entries to equip.";
    this.saiLabels.action_type.paramTooltip1[107] =
      "Group id column in the creature_summon_groups table (world database).";

    /* ACTION PARAM2 TOOLTIPS */
    this.saiLabels.action_type.paramTooltip2[1] =
      "Duration to wait before SMART_EVENT_TEXT_OVER event is triggered";
    this.saiLabels.action_type.paramTooltip2[4] =
      "If 0, everybody within the visibility range will hear the sound";
    this.saiLabels.action_type.paramTooltip2[18] =
      "Determines which unit flag to target; if 0, it targets the default unit flags which is creature_template.unit_flags. If set to 1 or higher, it targets creature_template.unit_flags2 (notice the '2') which has different values.";
    this.saiLabels.action_type.paramTooltip2[19] =
      "Determines which unit flag to target; if 0, it targets the default unit flags which is creature_template.unit_flags. If set to 1 or higher, it targets creature_template.unit_flags2 (notice the '2') which has different values.";
    this.saiLabels.action_type.paramTooltip2[36] =
      "Identifier of which faction the creature should become. If set to 0, it will set the creature's faction to creature_template.faction_a. If anything other than 1 it will be set to creature_template.faction_h.";
    this.saiLabels.action_type.paramTooltip2[39] =
      'Indicator whether or not we should automatically make the creature emote "<name> calls for help!" (which is usually blizzlike).';
    this.saiLabels.action_type.paramTooltip2[53] =
      "Entry of the `waypoints` (world database) table to follow.";
    this.saiLabels.action_type.paramTooltip2[55] =
      "Quest entry to count as 'failed' (based on third parameter). Does not have to be set if third parameter is set to 0.";
    this.saiLabels.action_type.paramTooltip2[71] =
      "Slotmask we show. Default is 0 and means all items are shown. If you only want to show one specific item (or two instead of all three), this field should be used as a bitmask starting at 1. Possible bits are 1, 2 and 4.";
    this.saiLabels.action_type.paramTooltip2[80] =
      "The timer update type. If set to 0, the script will only occur out of combat. If set to 1, it will only occur during combat and if set to 2 it will always occur.";
    this.saiLabels.action_type.paramTooltip2[90] =
      "If set to 0, it targets the stand states (stand/sit/sleep/etc.). If set to 1, it targets something talent-related for pets (don't use). If set to 2, it targets the stand flags (creep/untrackable/etc.) and if set to 3 it targets the stand misc. flags (hover/always-stand/etc.).";
    this.saiLabels.action_type.paramTooltip2[91] =
      "If set to 0, it targets the stand states (stand/sit/sleep/etc.). If set to 1, it targets something talent-related for pets (don't use). If set to 2, it targets the stand flags (creep/untrackable/etc.) and if set to 3 it targets the stand misc. flags (hover/always-stand/etc.).";
    this.saiLabels.action_type.paramTooltip2[92] =
      "If left at 0, the core will interrupt the currently being cast spell (based on the with-delay and instant parameters, of course)";
    this.saiLabels.action_type.paramTooltip2[98] =
      "Uses the `id` value from the `npc_text` table in the world database";

    /* ACTION PARAM3 TOOLTIPS */
    this.saiLabels.action_type.paramTooltip3[12] =
      "Duration the creature will be summoned (in milliseconds).";
    this.saiLabels.action_type.paramTooltip3[29] =
      "Default is 0. If it's not 0 it means the follow will finish ONLY once the creature is within interaction distance (5 yards) of the given entry.";
    this.saiLabels.action_type.paramTooltip3[53] =
      "Repeat the path when the it's finished.";
    this.saiLabels.action_type.paramTooltip3[55] =
      "If set to 1, we will mark the quest in parameter 2 to failed for our player targets.";
    this.saiLabels.action_type.paramTooltip3[71] =
      "Item entry one (main hand slot) (only has use if the first parameter is 0)";

    /* ACTION PARAM4 TOOLTIPS */
    this.saiLabels.action_type.paramTooltip4[12] =
      "Identicator whether or not the summoned creature should attack the action invoker (SMART_TARGET_ACTION_INVOKER) when it's summoned. 0 means it won't, 1 means it will attack.";
    this.saiLabels.action_type.paramTooltip4[29] =
      "The creature id that will be given as a quest credit when the follow has finished for whatever reason.";
    this.saiLabels.action_type.paramTooltip4[53] =
      "Quest entry to give credit for once the path has finished. Will use the target type and take all player entities from this list.";
    this.saiLabels.action_type.paramTooltip4[67] =
      "Only set this if the event repeats.";
    this.saiLabels.action_type.paramTooltip4[71] =
      "Item entry two (off hand slot) (only has use if the first parameter is 0)";

    /* ACTION PARAM5 TOOLTIPS */
    this.saiLabels.action_type.paramTooltip5[29] =
      "Requires the 4th parameter to be set and valid; determines whether the entry in parameter 4 is a monster kill or event happening. If you're not sure what they mean, read the quest_template wiki.";
    this.saiLabels.action_type.paramTooltip5[53] =
      "Time in milliseconds to wait after the path ended before we despawn.";
    this.saiLabels.action_type.paramTooltip5[67] =
      "Only set this if the event repeats.";
    this.saiLabels.action_type.paramTooltip5[71] =
      "Item entry three (gun/bow/etc. slot) (only has use if the first parameter is 0)";

    /* ACTION PARAM6 TOOLTIPS */
    this.saiLabels.action_type.paramTooltip6[53] =
      "Reactstate that is set when the waypoint starts.";

    /* EVENT PARAM1 TOOLTIPS */
    this.saiLabels.event_type.paramTooltip1[0] = "Timer min";
    this.saiLabels.event_type.paramTooltip1[1] = "Timer min";
    this.saiLabels.event_type.paramTooltip1[2] = "Timer min";
    this.saiLabels.event_type.paramTooltip1[3] = "Timer min";
    this.saiLabels.event_type.paramTooltip1[8] =
      "Spell id that will limit this event to only be triggered if the spell that hit us has this id. If left at 0, it works for EVERY spell.";
    this.saiLabels.event_type.paramTooltip1[9] =
      "Minimum distance to target for the event to be triggered";
    this.saiLabels.event_type.paramTooltip1[10] =
      "If 0, we allow only non-hostile units to trigger this event for us. If set to 1, we only allow hostile units to triger this event.";
    this.saiLabels.event_type.paramTooltip1[11] =
      "The condition type for this event to trigger. This is used to determine whether we should check if the mapid (parameter 2) or the zoneid (parameter 3) should be checked for correctness.";
    this.saiLabels.event_type.paramTooltip1[14] =
      "Health the friendly unit must be at. Warning: this is NOT health percentage!";
    this.saiLabels.event_type.paramTooltip1[16] =
      "Spell id for the event to trigger. If the spellid is negative it means the event is reversed and triggered only when the aura is actually active on the friendly unit.";
    this.saiLabels.event_type.paramTooltip1[17] =
      "Creature entry that must be summoned in order for this event to trigger. If left at 0 it will be triggered by any creature entry.";
    this.saiLabels.event_type.paramTooltip1[19] =
      "Quest id to trigger this event; if the parameter is 0 it means it will be triggered by ANY quest.";
    this.saiLabels.event_type.paramTooltip1[20] =
      "Quest id to trigger this event; if the parameter is 0 it means it will be triggered by ANY quest.";
    this.saiLabels.event_type.paramTooltip1[23] =
      "Spell id for the event to trigger. If the spellid is negative it means the event is reversed and triggered only when the aura is not present on the creature.";
    this.saiLabels.event_type.paramTooltip1[24] =
      "Spell id for the event to trigger. If the spellid is negative it means the event is reversed and triggered only when the aura is not present on the creature.";
    this.saiLabels.event_type.paramTooltip1[26] =
      "If 0, we allow only non-hostile units to trigger this event for us. If set to 1, we only allow hostile units to triger this event.";
    this.saiLabels.event_type.paramTooltip1[32] =
      "Minimum amount of damage required to trigger this event";
    this.saiLabels.event_type.paramTooltip1[33] =
      "Minimum amount of damage required to trigger this event";
    this.saiLabels.event_type.paramTooltip1[35] =
      "Creature entry to act as a condition. If left at 0, this event is triggered for any summon that despawn. If an entry is given, it is only triggered when that specific entry despawns.";
    this.saiLabels.event_type.paramTooltip1[38] =
      "First parameter of SMART_ACTION_SET_DATA";
    this.saiLabels.event_type.paramTooltip1[46] =
      "Entry of the areatrigger to make this event happen. If left at 0 it will trigger for any areatrigger.";
    this.saiLabels.event_type.paramTooltip1[52] =
      "The creature_text.groupid value to trigger this event for";
    this.saiLabels.event_type.paramTooltip1[53] =
      "Minimum required value the heal effect must be in order to trigger this event";
    this.saiLabels.event_type.paramTooltip1[59] =
      "First parameter of SMART_ACTION_CREATE_TIMED_EVENT";
    this.saiLabels.event_type.paramTooltip1[62] =
      "This is the gossip_menu.entry identifier";
    this.saiLabels.event_type.paramTooltip1[70] =
      "The new state of the gameobject after this event";
    this.saiLabels.event_type.paramTooltip1[75] =
      "Guid of the creature we want to check for. Can be left on 0 if the entry is given.";
    this.saiLabels.event_type.paramTooltip1[76] =
      "Guid of the gameobject we want to check for. Can be left on 0 if the entry is given.";

    /* EVENT PARAM2 TOOLTIPS */
    this.saiLabels.event_type.paramTooltip2[0] = "Timer max";
    this.saiLabels.event_type.paramTooltip2[1] = "Timer max";
    this.saiLabels.event_type.paramTooltip2[2] = "Timer max";
    this.saiLabels.event_type.paramTooltip2[3] = "Timer max";
    this.saiLabels.event_type.paramTooltip2[9] =
      "Maximum distance to target for the event to be triggered";
    this.saiLabels.event_type.paramTooltip2[32] =
      "Maximum allowed damage to make this event be able to trigger";
    this.saiLabels.event_type.paramTooltip2[33] =
      "Maximum allowed damage to make this event be able to trigger";
    this.saiLabels.event_type.paramTooltip2[38] =
      "Second parameter of SMART_ACTION_SET_DATA";
    this.saiLabels.event_type.paramTooltip2[53] =
      "Maximum allowed value of the heal effect to allow this event to trigger";
    this.saiLabels.event_type.paramTooltip2[62] =
      "This is the gossip_menu_option.id identifier";
    this.saiLabels.event_type.paramTooltip2[75] =
      "Entry of the creature we want to check for. Can be left on 0 if the guid is given.";
    this.saiLabels.event_type.paramTooltip2[76] =
      "Entry of the gameobject we want to check for. Can be left on 0 if the guid is given.";

    /* EVENT PARAM3 TOOLTIPS */
    this.saiLabels.event_type.paramTooltip3[0] = "Repeat timer min";
    this.saiLabels.event_type.paramTooltip3[1] = "Repeat timer min";
    this.saiLabels.event_type.paramTooltip3[2] = "Repeat timer min";
    this.saiLabels.event_type.paramTooltip3[3] = "Repeat timer min";
    this.saiLabels.event_type.paramTooltip3[5] =
      "Indicator if killed unit must be player only; if 0, the 4th parameter must be set to the creature id.";
    this.saiLabels.event_type.paramTooltip3[9] = "Timer min";
    this.saiLabels.event_type.paramTooltip3[13] =
      "Spell id the target must be casting. If left at 0, it detects ANY spell.";
    this.saiLabels.event_type.paramTooltip3[75] =
      "Min distance to the creature that'll make the event trigger";
    this.saiLabels.event_type.paramTooltip3[76] =
      "Min distance to the gameobject that'll make the event trigger";

    /* EVENT PARAM4 TOOLTIPS */
    this.saiLabels.event_type.paramTooltip4[0] = "Repeat timer max";
    this.saiLabels.event_type.paramTooltip4[1] = "Repeat timer max";
    this.saiLabels.event_type.paramTooltip4[2] = "Repeat timer max";
    this.saiLabels.event_type.paramTooltip4[3] = "Repeat timer max";
    this.saiLabels.event_type.paramTooltip4[5] =
      "Entry of the creature that has to be killed for this event to trigger. Only has effect if third parameter is set to 0.";
    this.saiLabels.event_type.paramTooltip4[9] = "Timer max";
    this.saiLabels.event_type.paramTooltip4[75] =
      "Timer to check for distance. It's not a good idea to leave this at 0, having a handful of events doing that can slow down your core big time.";
    this.saiLabels.event_type.paramTooltip4[76] =
      "Timer to check for distance. It's not a good idea to leave this at 0, having a handful of events doing that can slow down your core big time.";

    /* TARGET PARAM1 TOOLTIPS */
    this.saiLabels.target_type.paramTooltip1[9] =
      "If left at 0, it will target all creatures within the given distance";
    this.saiLabels.target_type.paramTooltip1[11] =
      "If left at 0, it will target all creatures within the given distance";
    this.saiLabels.target_type.paramTooltip1[13] =
      "If left at 0, it will target all gameobjects within the given distance";
    this.saiLabels.target_type.paramTooltip1[15] =
      "If left at 0, it will target all gameobjects within the given distance";
    this.saiLabels.target_type.paramTooltip1[19] =
      "If left at 0, it will target the closest creature of ANY entry";
    this.saiLabels.target_type.paramTooltip1[20] =
      "If left at 0, it will target the closest creature of ANY entry";

    /* TARGET PARAM2 TOOLTIPS */
    // there are no target param2 tooltips at the moment

    /* TARGET PARAM3 TOOLTIPS */
    this.saiLabels.target_type.paramTooltip3[19] =
      "If set to 0 it will only target alive creatures; if set to 1 it will target only alive creatures";
  }

  EnumtoDropdown(EnumObject) {
    return Object.entries(EnumObject).map(([key, value]) => {
      return { key: value, value: value, text: key };
    });
  }
}

export default new SaiEnums();
