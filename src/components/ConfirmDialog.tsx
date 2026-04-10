interface ConfirmDialogProps {
	open: boolean
	title: string
	message: string
	onConfirm: () => void
	onCancel: () => void
	confirmLabel?: string
	cancelLabel?: string
}

export default function ConfirmDialog({
	open,
	title,
	message,
	onConfirm,
	onCancel,
	confirmLabel = 'Delete',
	cancelLabel = 'Cancel',
}: ConfirmDialogProps) {
	if (!open) {
		return null
	}

	return (
		<div className="modal-backdrop" role="presentation">
			<div className="modal-card confirm-card" role="dialog" aria-modal="true">
				<div className="modal-header">
					<h2>{title}</h2>
				</div>

				<div className="modal-body">
					<p className="confirm-message">{message}</p>

					<div className="form-actions confirm-actions">
						<button type="button" className="ghost-button" onClick={onCancel}>
							{cancelLabel}
						</button>
						<button type="button" className="danger-button" onClick={onConfirm}>
							{confirmLabel}
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
