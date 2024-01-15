const knex = require('../config/dbConfig');

const sourceStressMap = {
    'job-situation': '1',
    'family-relations': '2',
    'world-events': '3',
    'personal-issues': '4',
    'mixed-sources': '5'
};

const exerciseFrequencyMap = {
    '0': '1',
    '1': '1',
    '2': '2',
    '3': '3',
    '4': '3',
    '5': '3',
    '6': '3',
    '7': '3'
};

const getRecommendations = async (stressLevel, sleepQuality, exerciseFrequency, sourceStress) => {
    try {
        const mappedSourceStress = sourceStressMap[sourceStress] || '1';
        const mappedExerciseFrequency = exerciseFrequencyMap[exerciseFrequency.toString()] || '1';

        const results = await knex('recommendations')
            .select([
                `stress_level_${stressLevel} as stressRecommendation`,
                `sleep_quality_${sleepQuality} as sleepRecommendation`,
                `exercise_frequency_${mappedExerciseFrequency} as exerciseRecommendation`,
                `source_stress_${mappedSourceStress} as sourceStressRecommendation`
            ])
            .first();
        return results;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

module.exports = { getRecommendations };
