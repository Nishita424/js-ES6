// Factory Pattern

class MemberFactory {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  createMember() {
    let member = {};
    if (this.type === 'simple') {
      member = new SimpleMembership(this.name);
    } else if (this.type === 'standard') {
      member = new StandardMembership(this.name);
    } else if (this.type == 'super') {
      member = new SuperMembership(this.name);
    } else {
      console.log('Invalid memebership type');
    }
    this.cost = member.cost;
  }

  define() {
    console.log(`${this.name} (${this.type}): ${this.cost}`);
  }
}

class SimpleMembership {
  constructor(name) {
    this.name = name;
    this.cost = '$10';
  }
}
class StandardMembership {
  constructor(name) {
    this.name = name;
    this.cost = '$15';
  }
}
class SuperMembership {
  constructor(name) {
    this.name = name;
    this.cost = '$25';
  }
}

const members = [];
const member1 = new MemberFactory('John Doe', 'simple');
const member2 = new MemberFactory('Jane Chris', 'super');
const member3 = new MemberFactory('Rohan Sher', 'standard');

members.push(member1);
members.push(member2);
members.push(member3);

member1.createMember();
member2.createMember();
member3.createMember();

members.forEach(function (member) {
  member.define();
});
