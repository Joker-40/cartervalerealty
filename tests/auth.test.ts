import { describe, expect, it } from 'vitest';
import {
  normalizeWorkspaceRedirect,
  validateWorkspaceCredentials,
  workspaceDemoCredentials,
} from '@/lib/auth-utils';

describe('workspace auth helpers', () => {
  it('normalizes redirects to workspace paths only', () => {
    expect(normalizeWorkspaceRedirect('/app/analytics')).toBe('/app/analytics');
    expect(normalizeWorkspaceRedirect('/properties')).toBe('/app/dashboard');
    expect(normalizeWorkspaceRedirect(undefined)).toBe('/app/dashboard');
  });

  it('validates demo credentials', () => {
    expect(validateWorkspaceCredentials(workspaceDemoCredentials.email, workspaceDemoCredentials.password)).toBe(true);
    expect(validateWorkspaceCredentials('wrong@example.com', workspaceDemoCredentials.password)).toBe(false);
  });
});
