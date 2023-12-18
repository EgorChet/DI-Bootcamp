import random

class Gene:
    def __init__(self):
        self.value = random.choice([0, 1])

    def mutate(self):
        self.value = 1 if self.value == 0 else 0

    def __repr__(self):
        return str(self.value)


class Chromosome:
    def __init__(self):
        self.genes = [Gene() for _ in range(10)]

    def mutate(self):
        for gene in self.genes:
            if random.random() < 0.5:  # 50% chance to flip each gene
                gene.mutate()

    def is_all_ones(self):
        return all(gene.value == 1 for gene in self.genes)

    def __repr__(self):
        return ''.join(map(str, self.genes))


class DNA:
    def __init__(self):
        self.chromosomes = [Chromosome() for _ in range(10)]

    def mutate(self):
        for chromosome in self.chromosomes:
            chromosome.mutate()

    def is_all_ones(self):
        return all(chromosome.is_all_ones() for chromosome in self.chromosomes)

    def __repr__(self):
        return '\n'.join(map(str, self.chromosomes))


class Organism:
    def __init__(self, environment):
        self.dna = DNA()
        self.environment = environment

    def mutate(self):
        if random.random() < self.environment:
            self.dna.mutate()

    def __repr__(self):
        return str(self.dna)


# Function to run the mutation simulation
def run_simulation_with_print(environment, max_generations=10000):
    organism = Organism(environment)
    generation = 0

    while not organism.dna.is_all_ones() and generation < max_generations:
        organism.mutate()
        generation += 1

    # Printing the final DNA and generation count
    print(f"Final DNA state after {generation} generations:")
    print(organism.dna)

    return generation, organism

# Run the simulation with print statements and an environment factor of 0.5
generation_count, final_organism = run_simulation_with_print(0.5)

# This will print the final state of the DNA and the number of generations. 
# We don't need to print it again here as it's already done in the function.





# Instructions :
# This challenge is about Biology that will put emphasis on your knowledge of classes, inheritance and polymorphism.

# Build a DNA object. DNA is composed of chromosomes which is itself composed of Genes.
# A Gene is a single value 0 or 1, it can mutate (flip).
# A Chromosome is a series of 10 Genes. It also can mutate, meaning a random number of genes can randomly flip (1/2 chance to flip).
# A DNA is a series of 10 chromosomes, and it can also mutate the same way Chromosomes can mutate.

# Implement these classes as you see fit.

# Create a new class called Organism that accepts a DNA object and an environment parameter that sets the probability for its DNA to mutate.

# Instantiate a number of Organism and let them mutate until one gets to a DNA which is only made of 1s. Then stop and record the number of generations (iterations) it took.
# Write your results in you personal biology research notebook and tell us your conclusion :).

