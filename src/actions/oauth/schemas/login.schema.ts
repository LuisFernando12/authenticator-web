import z from 'zod';

export const OauthQueryParamsSchema = z.object({
    responseType: z.string(),
    clientId: z.string(),
    redirectUri: z.string(),
    state: z.string(),
    scope: z.string(),
    codeChallenge: z.string().optional(),
    codeChallengeMethod: z.string().optional(),
    secret: z.string().optional(),
    oauthRequestId: z.string(),
});

export type OauthQueryParams = z.infer<typeof OauthQueryParamsSchema>;
