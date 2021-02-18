import { ResultCount, FinalResult, ResultMessage } from './diceTypes';

export const createMessage = (
  resultCount: ResultCount,
  finalResult: FinalResult
): ResultMessage => {
  const {
    totalSuccess,
    success,
    hungerCriticalSuccess,
    criticalSuccess,
    criticalFail,
  } = resultCount;

  const successMessage = `${success} ${
    success === 1 ? 'success' : 'successes'
  }`;
  const totalSuccessMessage = `${totalSuccess} ${
    totalSuccess === 1 ? 'success' : 'successes'
  }`;
  const criticalSuccessMessage = `${criticalSuccess} ${
    criticalSuccess === 1 ? 'critical' : 'criticals'
  }`;
  const criticalFailMessage = `${criticalFail} ${
    criticalFail === 1 ? 'critical fail' : 'critical failures'
  }`;
  const hungerCriticalMessage = `${hungerCriticalSuccess} ${
    hungerCriticalSuccess === 1 ? 'critical on hunger dice' : 'criticals on hunger dice'
  }`
  const totalMessage = `${totalSuccess} ${
    totalSuccess === 1 ? 'success' : 'successes'
  } all together`;

  switch (finalResult) {
    case 'fail':
      return {
        result: 'fail',
        message: 'No successes',
      };
    case 'success':
      return {
        result: 'success',
        message: totalSuccessMessage,
      };
    case 'criticalSuccess':
      return {
        result: 'criticalSuccess',
        message: `${successMessage}, ${criticalSuccessMessage}, ${totalMessage}. Critical Success!`,
      };
    case 'messyCritical':
      return {
        result: 'messyCritical',
        message: `${successMessage}, ${criticalSuccess > 0 ? criticalSuccessMessage + ', ': ''}${hungerCriticalMessage}, ${totalMessage}. Messy Critical!`,
      };
    case 'bestialFail':
      return {
        result: 'bestialFail',
        message: `No successes, ${criticalFailMessage}. Bestial Failiure!`
      }
    default:
      return {
        result: 'pending',
        message: '',
      };
  }
};
