import momentum from '../../Images/Classical_mechanics/momentum.jpg';
import friction from '../../Images/Classical_mechanics/friction.jpg';
import gravitation from '../../Images/Classical_mechanics/gravitation.jpg';

export {
    momentum,
    friction,
    gravitation
}

const Topics = [
    {
        topic: "Momentum",
        image: momentum,
        details: `Momentum is a vector quantity, defined as the product of the mass of a particle and its velocity. From Isaac Newton’s second law of motion we can see that the rate of change of momentum is equal to the force acting on the particle.
        

        From Newton’s second law it follows that, if a constant force acts on a particle for a given time, the product of force and the time interval is equal to the change in the momentum. Conversely, the momentum of a particle is a measurement of the time, required for a constant force to bring it to rest.`,
        formula: "p = mv",
        process: "Here, the linear momentum is defined by p, m is the mass of the system and v is its velocity. We can calculate the momentum (p) by multiplying Mass of the particle (m) with the velocity of the particle (v). The SI unit for momentum is kg · m/s."
    },
    {
        topic: "Friction",
        image: friction,
        details: `Friction is a force that resists the sliding or rolling of one solid object over another.
        Surface of an object is microscopically irreguler, thats why, when any two objects in contact try to be in motion relatively with the another one, a force apears at their contact point resisting the motion, this force is opposite to the direction of motion.`,
        formula: "F = μN",
        process: `F, is the frictional force, N is the normal force. The the friction is calculated by F = μN.
        
        μ is the coefficient of friction, when the two objects are in relative motion, we call it coefficient of kinetic friction and when they are static, it is called the static friction coefficient.`
    },
    {
        topic: "Gravitation",
        image: gravitation,
        details: "Gravity also termed as gravitation, is a force that occurs among all material objects in the universe. For any two objects or units having non-zero mass, the force of gravity has a tendency to attract them toward each other. The Universal Law of Gravitation says that: Every object in the universe has the property to attract every other object with a force which is directly proportional to the product of their masses and inversely proportional to the square of the distance between them ",

        formula: "F = GmM(d^-2)",
        process: "The Force of Gravitation F , between two bodies / system of mass m and M , where d is the radius or distance between the two bodies and G is the constant of proportionality known as the universal gravitation constant ( 6.67 × 10 ^ -11 Newton - meter ^ 2 · kg ^ -2 ) , is equals to product of ( G , m and M ) divided by the ( d ^ 2 ) . SI unit for gravitation force is Newton . SI unit for universal gravitational constant is Newton - meter ^ 2 · Kg ^ -2 "
    },
    {
        topic: "Force",
    },
    {
        topic: "Collision",
    },
    {
        topic: "Circular Motion",
    },
    {
        topic: "Torque",
    },
    {
        topic: "Error Measurements",
    },
    {
        topic: "Gravitation",
    },
    {
        topic: "Work Power Energy",
    },
    {
        topic: "Kinematics",
    }
]

export default Topics
