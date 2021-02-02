class Tree {
	static definition() {
		return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.";
	}

	constructor(species) {
		this.species = species;
	}
}

class Deciduous extends Tree {
	static definition() {
		return super.definition() + " Deciduous trees shed their leaves annually."
	}

	constructor(species, name) {
		super(species);
		this.name = name;
	}
}

class Evergreen extends Tree {
	static definition() {
		return super.definition() + " Evergreens keep their leaves all year round."
	}

	constructor(species, name) {
		super(species);
		this.name = name;
	}
}