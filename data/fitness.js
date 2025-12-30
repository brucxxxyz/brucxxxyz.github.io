// /data/fitness.js
// 健身动作数据（含三语名称 + 强度等级 + 热量）

const FITNESS = {
  warmup: {
    label: {
      "zh-CN": "热身",
      "zh-HK": "熱身",
      "en": "Warm-up"
    },
    items: [
      { name: { "zh-CN": "站姿提膝收腹", "zh-HK": "企身提膝收腹", "en": "Standing Knee Lift" }, level: 1, kcal: 60 },
      { name: { "zh-CN": "原地摆臂快走", "zh-HK": "原地擺臂快走", "en": "Arm Swing Walk" }, level: 1, kcal: 70 },
      { name: { "zh-CN": "肩部绕环", "zh-HK": "膊頭繞環", "en": "Shoulder Circles" }, level: 1, kcal: 40 },
      { name: { "zh-CN": "颈部活动", "zh-HK": "頸部活動", "en": "Neck Mobility" }, level: 1, kcal: 20 },
      { name: { "zh-CN": "开合步热身", "zh-HK": "開合步熱身", "en": "Side Step Warm-up" }, level: 1, kcal: 55 },
      { name: { "zh-CN": "手臂画圈", "zh-HK": "手臂畫圈", "en": "Arm Circles" }, level: 1, kcal: 45 }
    ]
  },

  legs: {
    label: {
      "zh-CN": "下肢训练",
      "zh-HK": "下肢訓練",
      "en": "Leg Training"
    },
    items: [
      { name: { "zh-CN": "徒手深蹲", "zh-HK": "徒手深蹲", "en": "Bodyweight Squat" }, level: 2, kcal: 90 },
      { name: { "zh-CN": "站姿侧抬腿", "zh-HK": "企身側抬腿", "en": "Side Leg Raise" }, level: 1, kcal: 50 },
      { name: { "zh-CN": "弓步蹲", "zh-HK": "箭步蹲", "en": "Lunge" }, level: 2, kcal: 85 },
      { name: { "zh-CN": "靠墙静蹲", "zh-HK": "靠牆靜蹲", "en": "Wall Sit" }, level: 2, kcal: 80 },
      { name: { "zh-CN": "后踢腿", "zh-HK": "後踢腿", "en": "Back Kick" }, level: 1, kcal: 60 },
      { name: { "zh-CN": "提踵训练", "zh-HK": "提踵訓練", "en": "Calf Raise" }, level: 1, kcal: 45 }
    ]
  },

  core: {
    label: {
      "zh-CN": "核心训练",
      "zh-HK": "核心訓練",
      "en": "Core Training"
    },
    items: [
      { name: { "zh-CN": "站姿转体", "zh-HK": "企身轉體", "en": "Standing Twist" }, level: 2, kcal: 80 },
      { name: { "zh-CN": "站姿收腹", "zh-HK": "企身收腹", "en": "Standing Crunch" }, level: 1, kcal: 50 },
      { name: { "zh-CN": "侧腹收缩", "zh-HK": "側腹收縮", "en": "Side Crunch" }, level: 2, kcal: 70 },
      { name: { "zh-CN": "站姿卷腹", "zh-HK": "企身卷腹", "en": "Standing Ab Curl" }, level: 2, kcal: 75 },
      { name: { "zh-CN": "核心稳定站姿", "zh-HK": "核心穩定企身", "en": "Core Stability Stand" }, level: 1, kcal: 40 },
      { name: { "zh-CN": "站姿侧弯", "zh-HK": "企身側彎", "en": "Standing Side Bend" }, level: 1, kcal: 45 }
    ]
  },

  upper: {
    label: {
      "zh-CN": "上肢训练",
      "zh-HK": "上肢訓練",
      "en": "Upper Body"
    },
    items: [
      { name: { "zh-CN": "站姿拳击（技术+呼吸）", "zh-HK": "企身拳擊（技術+呼吸）", "en": "Boxing (Technique + Breathing)" }, level: 2, kcal: 100 },
      { name: { "zh-CN": "俯身划船（徒手）", "zh-HK": "俯身划船（徒手）", "en": "Bent-over Row" }, level: 2, kcal: 85 },
      { name: { "zh-CN": "墙壁俯卧撑", "zh-HK": "牆壁掌上壓", "en": "Wall Push-up" }, level: 2, kcal: 90 },
      { name: { "zh-CN": "手臂后伸", "zh-HK": "手臂後伸", "en": "Arm Extension" }, level: 1, kcal: 50 },
      { name: { "zh-CN": "肩推（徒手）", "zh-HK": "肩推（徒手）", "en": "Shoulder Press" }, level: 2, kcal: 80 },
      { name: { "zh-CN": "手臂交叉拉伸", "zh-HK": "手臂交叉伸展", "en": "Arm Cross Stretch" }, level: 1, kcal: 30 }
    ]
  },

  cardio: {
    label: {
      "zh-CN": "有氧训练",
      "zh-HK": "有氧訓練",
      "en": "Cardio"
    },
    items: [
      { name: { "zh-CN": "原地高抬腿（慢速）", "zh-HK": "原地高抬腿（慢速）", "en": "High Knees (Slow)" }, level: 3, kcal: 130 },
      { name: { "zh-CN": "原地踏步", "zh-HK": "原地踏步", "en": "Marching" }, level: 1, kcal: 60 },
      { name: { "zh-CN": "开合跳（低冲击）", "zh-HK": "開合跳（低衝擊）", "en": "Jumping Jack (Low Impact)" }, level: 2, kcal: 110 },
      { name: { "zh-CN": "左右小跳", "zh-HK": "左右小跳", "en": "Side Hop" }, level: 2, kcal: 95 },
      { name: { "zh-CN": "轻量跑步原地", "zh-HK": "輕量原地跑", "en": "Light Jog in Place" }, level: 2, kcal: 100 },
      { name: { "zh-CN": "快速摆臂走", "zh-HK": "快速擺臂走", "en": "Fast Arm Walk" }, level: 2, kcal: 90 }
    ]
  },

  boxing: {
    label: {
      "zh-CN": "拳击训练",
      "zh-HK": "拳擊訓練",
      "en": "Boxing"
    },
    items: [
      { name: { "zh-CN": "波比简化版（不跳）", "zh-HK": "波比簡化版（唔跳）", "en": "Burpee (No Jump)" }, level: 3, kcal: 120 },
      { name: { "zh-CN": "轻量拳击组合（直拳+摆拳）", "zh-HK": "輕量拳擊組合（直拳+擺拳）", "en": "Boxing Combo (Jab + Hook)" }, level: 2, kcal: 110 },
      { name: { "zh-CN": "直拳练习", "zh-HK": "直拳練習", "en": "Jab Practice" }, level: 2, kcal: 90 },
      { name: { "zh-CN": "摆拳练习", "zh-HK": "擺拳練習", "en": "Hook Practice" }, level: 2, kcal: 95 },
      { name: { "zh-CN": "闪躲步伐", "zh-HK": "閃避步伐", "en": "Slip Footwork" }, level: 2, kcal: 85 },
      { name: { "zh-CN": "拳击步伐移动", "zh-HK": "拳擊步伐移動", "en": "Boxing Footwork" }, level: 2, kcal: 100 }
    ]
  }
};
