import mongoose from 'mongoose';

const PullRequestSchema = new mongoose.Schema({
  type: mongoose.Schema.Types.Mixed
});

PullRequestSchema.method('update', function(updates, callback) {
  Object.assign(this, updates, { updatedAt: new Date() });
  this.parent().save(callback);
});

export default mongoose.model('PullRequest', PullRequestSchema);