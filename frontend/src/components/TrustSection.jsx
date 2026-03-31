import { motion } from 'framer-motion';

export default function TrustSection() {
  const services = [
    {
      emoji: '🏠',
      title: 'Home Sample Collection',
      description: 'Trained phlebotomists collect samples at your convenience',
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      emoji: '🔬',
      title: 'Advanced Lab Testing',
      description: 'State-of-the-art equipment for accurate results',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      emoji: '📱',
      title: 'Digital Reports',
      description: 'Get reports instantly on your phone or email',
      gradient: 'from-teal-400 to-green-500'
    },
    {
      emoji: '👨‍⚕️',
      title: 'Expert Consultation',
      description: 'Discuss results with qualified healthcare professionals',
      gradient: 'from-orange-400 to-red-500'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional healthcare services at your doorstep
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`w-24 h-24 mx-auto mb-4 bg-gradient-to-br ${service.gradient} rounded-full flex items-center justify-center text-5xl shadow-lg`}>
                {service.emoji}
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
