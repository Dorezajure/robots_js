const robot = {
  maxEnergy: 100,
  energy: 100,
  actions: [ 
    {name: 'уборка', cost: 20},
    {name: 'завтрак', cost: 5},
    {name: 'обед', cost: 15},
    {name: 'ужин', cost: 10},
    {name: 'покупки', cost: 60},
  ],
  makeAction: function(action) {
    const currentActions = this.actions.find(function (item) {
      if (action === item.name) return true
    })
      
    if (!currentActions) {
            console.log(`Не могу выполнить действие: "${action}". Такой задачи нет в моем списке.`)
      return;
    }
    
    if (this.energy >= currentActions.cost) {
          this.energy = this.energy - currentActions.cost;
    console.log(`Выполняю действие: "${currentActions.name}". Осталось ${this.energy}% заряда.`)
    } else {
      console.log(`${this.energy}% - Данного заряда недостаточно для выполнения действия: ${currentActions.name}`)
    }
    
  },
  charge: function () {
    this.energy = this.maxEnergy;
    console.log("Уровень заряда равен 100%. Робот готов к выполнению новых задач.")
  }
};

robot.makeAction("уборка"); 
robot.makeAction("завтрак"); 
robot.makeAction("обед"); 
robot.makeAction("ужин"); 
robot.makeAction("покупки"); //Недостаточно энергии

robot.charge(); //Зарядка до 100%

robot.makeAction("покупки");
robot.makeAction("уборка");




