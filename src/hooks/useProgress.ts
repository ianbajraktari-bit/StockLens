import { useState, useCallback, useEffect } from 'react';

export interface CompanyProgress {
  companyId: string;
  sectionsCompleted: string[];
  thinkFirstAnswers: Record<string, string>;
  decision: 'bullish' | 'bearish' | 'neutral' | null;
  reflections: {
    whatWouldMakeYouWrong: string;
    whatToWatchNextQuarter: string;
    keyRisk: string;
  } | null;
  scenarioConfig: {
    revenueGrowth: number;
    operatingMargin: number;
    multiple: number;
  } | null;
  lastVisited: string;
  completedAt: string | null;
}

export interface UserProgress {
  companies: Record<string, CompanyProgress>;
  totalDecisionsMade: number;
  totalSectionsCompleted: number;
  startedAt: string;
}

const STORAGE_KEY = 'stocklens_progress';

function loadProgress(): UserProgress {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {
    // Ignore parse errors
  }
  return {
    companies: {},
    totalDecisionsMade: 0,
    totalSectionsCompleted: 0,
    startedAt: new Date().toISOString(),
  };
}

function saveProgress(progress: UserProgress): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // Ignore storage errors
  }
}

export function useProgress() {
  const [progress, setProgress] = useState<UserProgress>(loadProgress);

  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  const getCompanyProgress = useCallback(
    (companyId: string): CompanyProgress => {
      return (
        progress.companies[companyId] || {
          companyId,
          sectionsCompleted: [],
          thinkFirstAnswers: {},
          decision: null,
          reflections: null,
          scenarioConfig: null,
          lastVisited: new Date().toISOString(),
          completedAt: null,
        }
      );
    },
    [progress],
  );

  const markSectionCompleted = useCallback(
    (companyId: string, sectionId: string) => {
      setProgress((prev) => {
        const company = prev.companies[companyId] || {
          companyId,
          sectionsCompleted: [],
          thinkFirstAnswers: {},
          decision: null,
          reflections: null,
          scenarioConfig: null,
          lastVisited: new Date().toISOString(),
          completedAt: null,
        };

        if (company.sectionsCompleted.includes(sectionId)) return prev;

        const updated = {
          ...prev,
          companies: {
            ...prev.companies,
            [companyId]: {
              ...company,
              sectionsCompleted: [...company.sectionsCompleted, sectionId],
              lastVisited: new Date().toISOString(),
            },
          },
          totalSectionsCompleted: prev.totalSectionsCompleted + 1,
        };
        return updated;
      });
    },
    [],
  );

  const saveThinkFirstAnswer = useCallback(
    (companyId: string, questionId: string, answer: string) => {
      setProgress((prev) => {
        const company = prev.companies[companyId] || {
          companyId,
          sectionsCompleted: [],
          thinkFirstAnswers: {},
          decision: null,
          reflections: null,
          scenarioConfig: null,
          lastVisited: new Date().toISOString(),
          completedAt: null,
        };

        return {
          ...prev,
          companies: {
            ...prev.companies,
            [companyId]: {
              ...company,
              thinkFirstAnswers: {
                ...company.thinkFirstAnswers,
                [questionId]: answer,
              },
              lastVisited: new Date().toISOString(),
            },
          },
        };
      });
    },
    [],
  );

  const saveDecision = useCallback(
    (companyId: string, decision: 'bullish' | 'bearish' | 'neutral') => {
      setProgress((prev) => {
        const company = prev.companies[companyId] || {
          companyId,
          sectionsCompleted: [],
          thinkFirstAnswers: {},
          decision: null,
          reflections: null,
          scenarioConfig: null,
          lastVisited: new Date().toISOString(),
          completedAt: null,
        };

        const isNewDecision = company.decision === null;

        return {
          ...prev,
          companies: {
            ...prev.companies,
            [companyId]: {
              ...company,
              decision,
              lastVisited: new Date().toISOString(),
            },
          },
          totalDecisionsMade: isNewDecision
            ? prev.totalDecisionsMade + 1
            : prev.totalDecisionsMade,
        };
      });
    },
    [],
  );

  const saveReflections = useCallback(
    (
      companyId: string,
      reflections: {
        whatWouldMakeYouWrong: string;
        whatToWatchNextQuarter: string;
        keyRisk: string;
      },
    ) => {
      setProgress((prev) => {
        const company = prev.companies[companyId] || {
          companyId,
          sectionsCompleted: [],
          thinkFirstAnswers: {},
          decision: null,
          reflections: null,
          scenarioConfig: null,
          lastVisited: new Date().toISOString(),
          completedAt: null,
        };

        return {
          ...prev,
          companies: {
            ...prev.companies,
            [companyId]: {
              ...company,
              reflections,
              completedAt: new Date().toISOString(),
              lastVisited: new Date().toISOString(),
            },
          },
        };
      });
    },
    [],
  );

  const saveScenarioConfig = useCallback(
    (
      companyId: string,
      config: { revenueGrowth: number; operatingMargin: number; multiple: number },
    ) => {
      setProgress((prev) => {
        const company = prev.companies[companyId] || {
          companyId,
          sectionsCompleted: [],
          thinkFirstAnswers: {},
          decision: null,
          reflections: null,
          scenarioConfig: null,
          lastVisited: new Date().toISOString(),
          completedAt: null,
        };

        return {
          ...prev,
          companies: {
            ...prev.companies,
            [companyId]: {
              ...company,
              scenarioConfig: config,
              lastVisited: new Date().toISOString(),
            },
          },
        };
      });
    },
    [],
  );

  const getScorecard = useCallback(() => {
    const completedCompanies = Object.values(progress.companies).filter(
      (c) => c.completedAt,
    );
    const withReflections = completedCompanies.filter((c) => c.reflections);
    const withScenarios = completedCompanies.filter((c) => c.scenarioConfig);
    const totalAnswers = Object.values(progress.companies).reduce(
      (sum, c) => sum + Object.keys(c.thinkFirstAnswers).length,
      0,
    );

    return {
      companiesAnalyzed: Object.keys(progress.companies).length,
      companiesCompleted: completedCompanies.length,
      decisionsMade: progress.totalDecisionsMade,
      reflectionsWritten: withReflections.length,
      scenariosExplored: withScenarios.length,
      thinkFirstAnswered: totalAnswers,
      totalSections: progress.totalSectionsCompleted,
    };
  }, [progress]);

  return {
    progress,
    getCompanyProgress,
    markSectionCompleted,
    saveThinkFirstAnswer,
    saveDecision,
    saveReflections,
    saveScenarioConfig,
    getScorecard,
  };
}
