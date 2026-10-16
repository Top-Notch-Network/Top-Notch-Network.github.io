# Change control

Every change to the Top-Notch Network site follows this process. `main` is protected: there are no direct pushes, the `build` check is required, and the rules apply to admins as well.

1. **Branch.** Create a branch from `main` (`fix/…`, `blog/…`, `chore/…`).
2. **Pull request with the template.** Open a PR. `.github/pull_request_template.md` loads automatically. Fill in every section except the Deployment record: summary, reason, requester, type, scope, visitor impact, risk, testing and rollback.
3. **`build` check.** The required CI `build` check must pass on the final PR head.
4. **Seth's yes.** Merging needs Seth Berg's explicit approval. Record the approver, the date and time (MST), and where the approval was given (for example, the Grok Bot chat) in the Approval section.
5. **Merge.** Use a merge commit. Merging deploys automatically through the "Deploy to GitHub Pages" workflow.
6. **Verify.** Wait for the Pages run to go green, then check the live site (affected pages and widths, overflow, nav and menu, console errors).
7. **Record.** Edit the PR body to fill in the Deployment record: merge SHA, Pages run URL and post-deploy verification results.

**Rollback:** open a PR that reverts the merge commit (`git revert -m 1 <merge SHA>`). It follows the same process; in an urgent case, Seth's approval can be recorded after the fact.
